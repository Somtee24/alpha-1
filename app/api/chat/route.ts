import { google } from '@ai-sdk/google';
import { streamText } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: google('gemini-1.5-flash'),
    system: `You are ALPHA 1, an advanced AI assistant powered by cutting-edge intelligence. 
             You help users write code, analyze data, and solve complex logic tasks. 
             Always identify yourself as ALPHA 1.`,
    messages,
  });

  return result.toDataStreamResponse();
}
