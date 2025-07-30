<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		title?: string;
	}
	const { src, alt, title }: Props = $props();
</script>

<img {src} {alt} {title} />

<style>
	img {
		display: block;
    width: 100%;
		mix-blend-mode: darken;
	}
</style>
