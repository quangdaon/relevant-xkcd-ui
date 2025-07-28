export interface QueryModel {
	label: string;
	openAiModel: 'text-embedding-3-small' | 'text-embedding-3-large';
	qdrantCollection: string;
}
