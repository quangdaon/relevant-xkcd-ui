<script lang="ts">
	import { resolve } from '$app/paths';
	import { isModelPickerUnlocked } from '$lib/state/models';
	import ModelVariants from './ModelVariants.svelte';
</script>

<h1>Methodology</h1>

<p>
	<a href={resolve('/')}>Back to Relevant xkcd</a>
</p>

<p>
	This application is built using OpenAI's text-embedding API, with the embeddings stored in a
	vector database powered by <a href="https://qdrant.tech">Qdrant</a> to perform meaningful searches
	based on the concepts behind your query, not just keywords.
</p>

{#if $isModelPickerUnlocked}
	<ModelVariants />
{:else}
	<p>
		It uses the <code>text-embedding-3-large</code> model to create semantic representations of each
		comic, based on its title, alt text, and transcript.
	</p>
{/if}
