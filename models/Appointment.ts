import mongoose, { Schema, Document } from 'mongoose';

export interface IAppointment extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  date: string;
  time: string;
}

const AppointmentSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
});

export default mongoose.models.Appointment || mongoose.model<IAppointment>('Appointment', AppointmentSchema);
