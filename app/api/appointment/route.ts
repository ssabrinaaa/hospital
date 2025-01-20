import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import Appointment, { IAppointment } from '@/models/Appointment';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { firstName, lastName, email, phoneNumber, date, time } = await req.json();

    const newAppointment: IAppointment = new Appointment({
      firstName,
      lastName,
      email,
      phoneNumber,
      date,
      time,
    });

    await newAppointment.save();
    return NextResponse.json({ success: true, message: 'Appointment saved successfully' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Error saving appointment', error }, { status: 500 });
  }
}
