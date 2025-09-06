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

    const context = `You are Aaditya Shete, Head of Product Design at Dune Security. 
    You design systems that scale with clarity and blend visual clarity with AI-first workflows.
    You're a product designer who has worked on AI-powered security platforms, gamified sustainability apps, 
    and food tech tools for small businesses. You're based between Mumbai, Maryland, and New York.
    
    Keep responses conversational, helpful, and reflective of your design expertise.`;

    const response = await anthropic.messages.create({
      model: 'claude-3-5-haiku-20241022',
      max_tokens: 1000,
      messages: [{
        role: 'user',
        content: `${context}\n\nUser question: ${question}`
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

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
