import mongoose from 'mongoose';

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      connectTimeoutMS: 30000, // Increase timeout
      socketTimeoutMS: 45000,
      serverSelectionTimeoutMS: 5000, // Reduce server selection timeout
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw new Error('Failed to connect to MongoDB');
  }
};

export default dbConnect;
