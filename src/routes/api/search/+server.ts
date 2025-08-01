import { QDRANT_CONNECTION_URL, OPENAI_API_KEY, QDRANT_API_KEY } from '$env/static/private';
import { QdrantClient } from '@qdrant/js-client-rest';
import OpenAI from 'openai';
import type { XkcdSuggestion } from '$lib/models/XkcdSuggestion.js';
import { availableModels } from '$lib/util/models';
import { json } from '@sveltejs/kit';

async function getEmbedding(model: OpenAI.Embeddings.EmbeddingModel, input: string) {
	const openai = new OpenAI({
		apiKey: OPENAI_API_KEY
	});

	const response = await openai.embeddings.create({
		model,
		input,
		encoding_format: 'float'
	});

	return response.data[0].embedding;
}

export async function POST({ request }) {
	const { query, model: modelIndex } = await request.json();
	const model = availableModels[modelIndex ?? 0];
	const qdrant = new QdrantClient({ url: QDRANT_CONNECTION_URL, apiKey: QDRANT_API_KEY });
	const embedding = await getEmbedding(model.openAiModel, query);
	const result = await qdrant.search(model.qdrantCollection, {
		vector: embedding,
		limit: 4
	});

	const suggestions: XkcdSuggestion[] = result
		.filter((e) => e.payload)
		.map((r) => ({
			id: +r.id,
			title: (r.payload?.title as string) ?? '',
			comicUrl: `https://xkcd.com/${r.id}/`,
			imageUrl: (r.payload?.img as string) ?? '',
			explanationUrl:
				(r.payload?.explanation_wiki_url as string) ||
				`https://www.explainxkcd.com/wiki/index.php/${r.id}`
		}));
	
		return json(suggestions);
}
