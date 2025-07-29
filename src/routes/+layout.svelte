<script>
	import '$lib/style/main.css';

	const { children } = $props();
</script>

{@render children?.()}

<footer class="container">
  A <a href="https://www.quangdao.com/">Quangdao Nguyen</a> catastrophe. All rights reserved.
</footer>

<style>
  footer {
    margin: 4em auto 2em;
    font-style: italic;
    text-align: center;
    font-size: 0.8em;
  }
</style>