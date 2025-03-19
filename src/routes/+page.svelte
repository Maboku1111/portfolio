<!-- <script>
  import { gsap } from "gsap";
  import { onMount, onDestroy } from "svelte";

  export let data;

  let ctx;
  let heading;

  gsap.registerPlugin();
  gsap.config({ trialWarn: false });

  onMount(() => {
    const textElement = document.getElementById("textElement");
    const text = textElement.textContent;
    const repeatCount = 8;

    console.log(textElement);
    console.log(textElement.nodeType);

    // Clear the original text and incorporate spans for each character
    textElement.textContent = "";
    const wrapper = document.createElement("span");
    wrapper.className = "text-wrapper";

    // Split the text into individual characters
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const span = document.createElement("span");
      span.textContent = char;

      // Create the clone element for each character
      const clone = document.createElement("div");
      clone.className = "cloneText";
      clone.textContent = char;

      // Position the clone below the original text
      span.appendChild(clone);
      wrapper.appendChild(span);
    }

    textElement.appendChild(wrapper);

    // GSAP Animation for each character
    gsap.set(".text-wrapper span .cloneText", {
      yPercent: (index) => (index % 2 === 0 ? -100 : 100),
    });

    let tl = gsap.timeline({ paused: true });

    document.querySelectorAll(".text-wrapper span").forEach((span, i) => {
      const clone = span.querySelector(".cloneText");

      // Animate the clone text
      let tween = gsap.to(clone, {
        repeat: repeatCount,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100",
        duration: 0.4,
      });

      tl.add(tween, 0);
    });

    gsap.to(tl, {
      progress: 1,
      duration: 4,
      ease: "power4.in",
    });

    // GSAP animation for the heading (with staggered effect)
    ctx = gsap.context(() => {
      tl.from(heading, {
        duration: 2.5,
        y: -100,
        stagger: 0.5,
      });
    });
  });

  onDestroy(() => {
    ctx?.revert();
  });
</script>

<body>
  <div class="stage">
    <h1 id="textElement" bind:this={heading}>
      {data.verse.random_verse.book +
        " " +
        data.verse.random_verse.chapter +
        ":" +
        data.verse.random_verse.verse}
    </h1>
  </div>
</body>

<style>
  body {
    font-family: "Bebas Neue", sans-serif;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: #262626;
    line-height: 1;
  }
  .stage {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: clamp(2rem, 9vw + 1rem, 12rem);
  }
  h1 {
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .text-wrapper {
    display: flex;
  }
  .text-wrapper span {
    position: relative;
  }
  .cloneText {
    position: absolute;
    left: 0;
    top: 0;
  }
</style> -->

<script>
  import { gsap } from "gsap";
  import { onMount } from "svelte";

  export let data;

  let characters = [];
  let heading;

  // Create an array of individual characters for the text
  $: {
    if (data?.verse?.random_verse) {
      const text = `${data.verse.random_verse.book} ${data.verse.random_verse.chapter}:${data.verse.random_verse.verse}`;
      characters = text.split("");
    }
  }

  onMount(() => {
    const repeatCount = 8;
    let tl = gsap.timeline({ paused: true });

    // Add GSAP animations based on the characters
    document.querySelectorAll(".character").forEach((span, i) => {
      const clone = span.querySelector(".cloneText");

      let tween = gsap.to(clone, {
        repeat: repeatCount,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100",
        duration: 0.4,
      });

      tl.add(tween, 0);
    });

    gsap.to(tl, {
      progress: 1,
      duration: 4,
      ease: "power4.in",
    });

    // Animate the heading with stagger
    gsap.from(heading, {
      duration: 2.5,
      y: -100,
    //   stagger: 0.5,
    });
  });
</script>

<body>
  <div class="stage">
    <h1 bind:this={heading}>
      {#each characters as char, index (index)}
        <span class="character">
          {char}
          <div class="cloneText">{char}</div>
        </span>
      {/each}
    </h1>
  </div>
</body>

<style>
  body {
    font-family: "Bebas Neue", sans-serif;
    padding: 0;
    margin: 0;
    min-height: 100vh;
    background: #262626;
    line-height: 1;
  }
  .stage {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: clamp(2rem, 9vw + 1rem, 12rem);
  }
  h1 {
    letter-spacing: 0.03em;
    text-transform: uppercase;
  }
  .character {
    position: relative;
  }
  .cloneText {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
