import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const connectDB = async () => {
    try {
        const connectionString = `${process.env.MONGODB_URI}/${DB_NAME}?retryWrites=true&w=majority`;
        await mongoose.connect(connectionString);
        console.log('Connected Successfully');
    } catch (error) {
        console.error('DB connection failed:', error);
        process.exit(1);
    }
};

export default connectDB;
