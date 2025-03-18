<script>
    /** @type {import('./$types').PageProps} */
	let { data } = $props();
    console.log(data)
</script>

<h1>{data.verse.random_verse.book + " " + data.verse.random_verse.chapter + ":" + data.verse.random_verse.verse}</h1>