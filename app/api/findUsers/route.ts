import { NextRequest, NextResponse } from 'next/server';
import dbConnect  from '../../../lib/dbConnect'
import User from '@/models/User';
 
// Handle GET requests to "/api/findUsers"
export async function GET(req: NextRequest) {
  // Connect to MongoDB
  await dbConnect();
 
  try {
    // Fetch all users
    const users = await User.find({});
    return NextResponse.json({ success: true, data: users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
 
// Handle POST requests to "/api/findUsers"
export async function POST(req: NextRequest) {
  // Connect to MongoDB
  await dbConnect();
 
  try {
    // Parse the JSON body from the request
    const body = await req.json();
 
    // Create a new user
    const newUser = await User.create(body);
    return NextResponse.json({ success: true, data: newUser }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error }, { status: 400 });
  }
}