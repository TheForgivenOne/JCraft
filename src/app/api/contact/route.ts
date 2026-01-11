import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // In a real application, you would process the contact form data here
    // For example, save to database, send email, etc.
    
    // For now, we'll just return a success response
    return res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}