// app/api/auth/register/route.js

import dbConnect from '../../../lib/dbConnect'; // Adjust path as necessary
import User from '../../../models/User'; // Adjust path as necessary
import bcrypt from 'bcryptjs';

export async function POST(req) {
  try {
    await dbConnect(); // Ensure you connect to the database

    const { email, password } = await req.json();

    if (!email || !password) {
      return new Response(JSON.stringify({ error: 'Email and password are required' }), { status: 400 });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create new user
    const user = await User.create({ email, password: hashedPassword });

    return new Response(JSON.stringify({ message: 'User registered successfully' }), { status: 201 });
  } catch (error) {
    console.error('Error in registration:', error);
    return new Response(JSON.stringify({ error: 'Registration failed' }), { status: 500 });
  }
}
