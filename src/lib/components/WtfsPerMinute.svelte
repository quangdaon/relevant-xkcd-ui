<script>
	import { asset } from '$app/paths';
	import ComicImage from './ComicImage.svelte';
</script>

<section>
	<h3>
		Ha! I thought that was xkcd too, but it's actually from Thom Holwerda on <a
			href="https://www.osnews.com/comics">OSNews Comics</a
		>.
	</h3>

	<div class="comic">
		<ComicImage
			src={asset('/wtfspm.webp')}
			alt="The only valid measurement of code quality: WTFs/minute"
			title="Not XKCD, but close enough to fool 93% of developers."
		/>
	</div>

	<p>But just in case you're still looking for the closest xkcd match...</p>
</section>

<style>
	section {
		margin-bottom: 2em;
	}

	.comic {
    margin: 2em auto;
	}
  
	@media only screen and (min-width: 900px) {
    .comic {
      max-width: 60%;
		}
	}
</style>
