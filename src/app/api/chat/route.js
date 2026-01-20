import openai from '@/lib/openai';
import { NextResponse } from 'next/server';

export async function POST(request) {
	try {
		// Check if API key is configured
		if (!process.env.OPENAI_API_KEY) {
			return NextResponse.json(
				{ error: 'OPENAI_API_KEY is not configured' },
				{ status: 500 }
			);
		}

		const { message } = await request.json();

		if (!message) {
			return NextResponse.json({ error: 'Message is required' }, { status: 400 });
		}

		const model = process.env.OPENAI_MODEL || 'gpt-4';

		const completion = await openai.chat.completions.create({
			model,
			messages: [{ role: 'user', content: message }],
		});

		// Validate completion response
		if (!completion.choices || completion.choices.length === 0) {
			throw new Error('No response from OpenAI');
		}

		return NextResponse.json({
			response: completion.choices[0].message.content,
		});
	} catch (error) {
		console.error('OpenAI API error:', error);
		return NextResponse.json(
			{ error: 'Failed to get response from OpenAI' },
			{ status: 500 }
		);
	}
}
