// app/api/auth/user/route.js
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/dbConnect'; // Adjust the path as needed
import User from '../../../models/User'; // Adjust the path as needed

export async function GET(request) {
  try {
    await dbConnect();
    const { headers } = request;
    const token = headers.get('authorization')?.replace('Bearer ', '');
    
    // Verify and decode the token to get user ID
    // const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    // const userId = decodedToken.id;

    // Fetch user details from the database
    const user = await User.findOne({ token }); // Adjust according to your user model

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    return NextResponse.json({ error: 'Error fetching user details' }, { status: 500 });
  }
}
