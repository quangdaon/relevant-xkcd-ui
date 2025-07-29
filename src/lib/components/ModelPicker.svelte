<script lang="ts">
	import { availableModels } from '$lib/util/models';

	interface Props {
		value: number;
	}

	let { value = $bindable() }: Props = $props();
</script>

<select id="model-picker" bind:value>
	{#each availableModels as model, i}
		<option value={i}>{model.label}</option>
	{/each}
</select>

<style>
  select {
    margin-left: 0.5em;
  }
</style>