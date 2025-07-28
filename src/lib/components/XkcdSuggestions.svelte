<script lang="ts">
	import type { XkcdSuggestion } from '$lib/models/XkcdSuggestion';

	interface Props {
		comics: XkcdSuggestion[];
	}

	const { comics }: Props = $props();
	const primary = $derived(comics[0]);
	const secondaries = $derived(comics.slice(1));
</script>

<div class="match">
	<h2>{primary.title}</h2>
	<a href={primary.comicUrl}>
		<img src={primary.imageUrl} alt={primary.title} />
	</a>
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
	.suggestions-list {
		display: flex;
    gap: 1em;
    justify-content: stretch;
    width: 100%;
	}

  .suggestion {
    flex: 1 1 auto;
  }

  .suggestion img {
    width: 100%;
    display: block;
  }
</style>
