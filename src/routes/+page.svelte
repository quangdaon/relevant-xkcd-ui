<script lang="ts">
	import ModelPicker from '$lib/components/ModelPicker.svelte';
	import XkcdSuggestions from '$lib/components/XkcdSuggestions.svelte';

	let found = $state(null);
	let query = $state('');
	let loading = $state(false);
	let model = $state(0);

	const search = async () => {
		loading = true;
		const req = await fetch('/search', {
			method: 'POST',
			body: JSON.stringify({ query, model })
		});

		found = await req.json();
		loading = false;
	};

	const submit = async (evt: SubmitEvent) => {
		evt.preventDefault();
		await search();
	};
</script>

<ModelPicker bind:value={model} />
<form onsubmit={submit}>
	<input type="text" bind:value={query} />
	<button>Submit</button>
</form>

{#if loading}
	<p>Loading...</p>
{:else if found}
	<XkcdSuggestions comics={found} />
{/if}
