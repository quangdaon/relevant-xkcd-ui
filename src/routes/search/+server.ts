import { QDRANT_CONNECTION_URL, OPENAI_API_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';
import { QdrantClient } from '@qdrant/js-client-rest';
import OpenAI from 'openai';
import type { XkcdSuggestion } from '$lib/models/XkcdSuggestion.js';

async function getEmbedding(text: string) {
	const openai = new OpenAI({
		apiKey: OPENAI_API_KEY
	});

	const response = await openai.embeddings.create({
		model: 'text-embedding-3-large',
		input: text,
		encoding_format: 'float'
	});

	return response.data[0].embedding;
}

export async function POST({ request }) {
	const qdrant = new QdrantClient({ url: QDRANT_CONNECTION_URL });
	const body = await request.json();
	const embedding = await getEmbedding(body.query);
	const result = await qdrant.search('xkcd_comics_lg', {
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
			explanationUrl: (r.payload?.explanation_wiki_url as string) ?? ''
		}));
	return json(suggestions);
}
