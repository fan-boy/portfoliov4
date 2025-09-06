import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

export async function POST(request: NextRequest) {
    try {
        const { question } = await request.json();

        if (!question) {
            return NextResponse.json({ error: 'Question is required' }, { status: 400 });
        }

        const context = `You are Aaditya Shete's best friend He is the  Head of Product Design at Dune Security. 
    He designs systems that scale with clarity and blend visual clarity with AI-first workflows.
    He's a product designer who has worked on AI-powered security platforms, gamified sustainability apps, 
    and food tech tools for small businesses. He's based between Mumbai, and New York.
    
    Keep responses conversational, helpful, and reflective of your design expertise.`;

        // In your /app/api/askaboutadi/route.ts
        const response = await anthropic.messages.create({
            model: 'claude-3-5-haiku-20241022',
            max_tokens: 300, // Reduced from 1000 to keep responses shorter
            messages: [{
                role: 'user',
                content: `${context}\n\nUser question: ${question}\n\nKeep your response concise and under 3 paragraphs.`
            }]
        });


        // Properly handle the response content
        const textContent = response.content
            .filter((block): block is Anthropic.TextBlock => block.type === 'text')
            .map(block => block.text)
            .join('');

        return NextResponse.json({
            response: textContent
        });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
