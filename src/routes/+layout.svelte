<script>
    let { children } = $props();
</script>

<nav>
    <a href="/">splash</a>
	<a href="/home">home</a>
	<a href="/projects">about</a>
    <a href="/contact">contact me</a>
</nav>

{@render children()}