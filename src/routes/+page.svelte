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

<main>
	<div class="container">
		<h1>Relevant XKCD</h1>

		<form class="form" onsubmit={submit}>
			<textarea bind:value={query} rows="2" maxlength="500"></textarea>

			<div class="form-settings">
				<label>
					Model<sup><a href="/methodology">?</a></sup>:
					<ModelPicker bind:value={model} />
				</label>
				<button>Submit</button>
			</div>
		</form>

		{#if loading}
			<p>Loading...</p>
		{:else if found}
			<XkcdSuggestions comics={found} />
		{/if}
	</div>
</main>

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
