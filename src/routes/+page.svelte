<script lang="ts">
	import { resolve } from '$app/paths';
	import Loader from '$lib/components/Loader.svelte';
	import ModelPicker from '$lib/components/ModelPicker.svelte';
	import ModelsUnlockedMessage from '$lib/components/ModelsUnlockedMessage.svelte';
	import WtfsPerMinute from '$lib/components/WtfsPerMinute.svelte';
	import XkcdSuggestions from '$lib/components/XkcdSuggestions.svelte';
	import { isModelPickerUnlocked, selectedModel } from '$lib/state/models';

	const { data } = $props();

	const isWtfpm = (q: string) =>
		/^(wt|what the)\s*(eff|f(uck)?)s?\s*(freq(uency)?|rate|(\/|p(er)?)?\s*m(in(ute)?)?)$/.test(q);

	const { samplePrompt } = data;

	let found = $state(null);
	let query = $state('');
	let loading = $state(false);
	let modelUnlockedMessage = $state(false);
	let isWtfpmQuery = $state(false);

	const search = async () => {
		if (!$isModelPickerUnlocked && query === '404') {
			// Oh, hi! I guess this is one way to discover my secret.
			$isModelPickerUnlocked = true;
			modelUnlockedMessage = true;
			return;
		}

		isWtfpmQuery = isWtfpm(query.trim().toLowerCase());
		modelUnlockedMessage = false;
		loading = true;

		const reqBody: any = { query: query || samplePrompt };

		if ($isModelPickerUnlocked) reqBody.model = $selectedModel;
		const req = await fetch(resolve('/api/search'), {
			method: 'POST',
			body: JSON.stringify(reqBody)
		});

		found = await req.json();
		loading = false;
	};

	const submit = async (evt: SubmitEvent) => {
		evt.preventDefault();
		await search();
	};

	const handleTextKeydown = async (evt: KeyboardEvent) => {
		if (evt.key === 'Enter' && !evt.shiftKey) {
			evt.preventDefault();
			await search();
		}
	};
</script>

<h1>Relevant XKCD</h1>

<form class="form" onsubmit={submit}>
	<textarea
		bind:value={query}
		rows="2"
		maxlength="500"
		onkeydown={handleTextKeydown}
		placeholder={`Example: ${samplePrompt}`}
	></textarea>

	<div class="form-settings">
		{#if $isModelPickerUnlocked}
			<label>
				Model<sup><a href={resolve('/methodology')}>?</a></sup>:
				<ModelPicker bind:value={$selectedModel} />
			</label>
		{/if}
		<button>Submit</button>
	</div>
</form>

{#if modelUnlockedMessage}
	<ModelsUnlockedMessage />
{:else if loading}
	<Loader />
{:else if found}
	{#if isWtfpmQuery}
		<WtfsPerMinute />
	{/if}
	<XkcdSuggestions comics={found} />
{/if}

<style>
	.form textarea,
	.form-settings {
		border: 3px solid var(--color-black);
	}

	.form textarea {
		border-bottom: none;
		width: 100%;
		resize: vertical;
		margin: 0;
		padding: 1rem;
		font-size: 2em;
		background: none;
		min-height: 2em;
		max-height: 70vh;
	}

	.form:has(textarea:focus) {
		outline: 2px solid var(--color-blue);
	}

	.form textarea {
		outline: none;
	}

	.form-settings {
		width: 100%;
		display: flex;
		gap: 0.5em;
		justify-content: end;
		padding: 0.5em;
		border-top: none;
	}

	.form-settings label {
		display: inline-block;
		vertical-align: middle;
		font-weight: bold;
	}
</style>
