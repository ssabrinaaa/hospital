import mongoose from 'mongoose';

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please add your MongoDB URI');
}

let isConnected: boolean = false;

const connectToDatabase = async () => {
  if (isConnected) {
    return; // Return early if already connected
  }

  try {
    await mongoose.connect(uri, {
      dbName: 'ansuariya' // Specify your database name here
    });
    isConnected = true;
  } catch (error) {
    // console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

export default connectToDatabase;
