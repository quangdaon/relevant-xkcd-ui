import type { QueryModel } from '$lib/models/QueryModel';

export const availableModels: QueryModel[] = [
	{
		label: 'Large (default)',
		openAiModel: 'text-embedding-3-large',
		qdrantCollection: 'xkcd_comics_lg'
	},
	{
		label: 'Large w/ Explanations',
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
