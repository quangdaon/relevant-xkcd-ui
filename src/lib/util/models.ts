import type { QueryModel } from '$lib/models/QueryModel';
import { writable } from 'svelte/store';

export const availableModels: QueryModel[] = [
	{
		label: 'Default',
		openAiModel: 'text-embedding-3-large',
		qdrantCollection: 'xkcd_comics_lg'
	},
	{
		label: 'With Explanations',
		openAiModel: 'text-embedding-3-large',
		qdrantCollection: 'xkcd_comics_exp_lg'
	},
	{
		label: 'Small',
		openAiModel: 'text-embedding-3-small',
		qdrantCollection: 'xkcd_comics'
	},
	{
		label: 'Small w/ Explanations',
		openAiModel: 'text-embedding-3-small',
		qdrantCollection: 'xkcd_comics_exp'
	}
];

export const selectedModel = writable(0);
