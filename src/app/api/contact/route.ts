import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  // Basic validation
  if (!name || !email || !message) {
    return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
  }

  try {
    // In a real application, you would process the contact form data here
    // For example, save to database, send email, etc.

    // For now, we'll just return a success response
    return NextResponse.json({ message: 'Contact form submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}