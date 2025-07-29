<script lang="ts">
	import type { XkcdSuggestion } from '$lib/models/XkcdSuggestion';

	interface Props {
		comics: XkcdSuggestion[];
	}

	const { comics }: Props = $props();
	const primary = $derived(comics[0]);
	const secondaries = $derived(comics.slice(1));
</script>

<div class="primary">
	<h2>{primary.title}</h2>
	<a href={primary.comicUrl}>
		<img src={primary.imageUrl} alt={primary.title} />
	</a>
	<div class="primary-links">
		<div class="permalink">
			<b>Permalink:</b> <a href={primary.comicUrl}>{primary.comicUrl}</a>
		</div>

		<div class="explanation">
			<a href={primary.explanationUrl}>Explain</a>
		</div>
	</div>
</div>

<div class="suggestions">
	<h3>Other Matches</h3>
	<div class="suggestions-list">
		{#each secondaries as sug}
			<div class="suggestion">
				<a href={sug.comicUrl}>
					<img src={sug.imageUrl} alt={sug.title} />
				</a>
			</div>
		{/each}
	</div>
</div>

<style>
	h2,
	h3 {
		text-align: center;
	}

	.primary {
		margin-bottom: 2em;
	}

	.primary img {
		display: block;
		width: 100%;
	}

	.suggestion img {
		display: block;
		width: 100%;
		margin-bottom: 1em;
	}

	.primary-links {
		margin-top: 1em;
		display: flex;
		justify-content: space-between;
	}

	img {
		mix-blend-mode: darken;
	}

	@media only screen and (min-width: 900px) {
		.primary img {
			max-width: 60%;
      margin: auto;
		}
		.suggestions-list {
			display: flex;
			gap: 1em;
			justify-content: stretch;
			width: 100%;
		}

		.suggestion {
			aspect-ratio: 1;
			flex: 1 1 0;
		}

		.suggestion img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			display: block;
		}
	}
</style>
