// src/utils/aiClient.ts
import { HfInference } from '@huggingface/inference';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function getAIResponse(question: string) {
    const response = await hf.textGeneration({
        model: 'bigscience/bloom-560m',
        inputs: question,
        parameters: { max_new_tokens: 100 },
    });
    return response.generated_text || 'Unable to generate a response.';
}
