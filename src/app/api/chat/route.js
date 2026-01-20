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

		const completion = await openai.chat.completions.create({
			model: 'gpt-4',
			messages: [{ role: 'user', content: message }],
		});

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
