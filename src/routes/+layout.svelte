<script>
	import '$lib/style/main.css';

	const { children } = $props();
</script>

<main>
	<div class="container">
		{@render children?.()}
	</div>
</main>

<footer class="container">
	A <a href="https://www.quangdao.com/">Quangdao Nguyen</a> catastrophe. All rights reserved. |
	<a href="/privacy">Privacy Policy</a>
</footer>

<style>
	footer {
		margin: 4em auto 2em;
		font-style: italic;
		text-align: center;
		font-size: 0.8em;
	}
</style>
