import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if (!DB_URI) {
  throw new Error(
    'Please define the DB_URI environment variable inside .env.<development/production>.local'
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI || '');
    console.log(
      `MongoDB connected: ${mongoose.connection.host} in ${NODE_ENV} mode`
    );
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;
