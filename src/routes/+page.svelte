<script>
    import { gsap } from "gsap";
    import SplitText from "gsap";
    import { onMount } from "svelte";

    /** @type {import('./$types').PageProps} */
	let { data } = $props();
    gsap.registerPlugin(SplitText)

    onMount(() => {
        var tl = gsap.timeline()
        mySplitText = new SplitText("#heading", { type: "words, chars"})
        chars = mySplitText.chars
        
        gsap.set("#heading", { perspective: 400})

        console.log(chars)

        tl.from(chars, {
            duration: 0.8,
            opacity: 0,
            scale: 0,
            y: 80,
            rotationX: 180,
            transformOrigin: "0% 50% -50",
            ease: "back",
            stagger: 0.01
        });
    })

    export const layout = null;
</script>

<div id="heading">{data.verse.random_verse.book + " " + data.verse.random_verse.chapter + ":" + data.verse.random_verse.verse}</div>