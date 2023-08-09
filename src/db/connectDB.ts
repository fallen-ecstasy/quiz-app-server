import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();


export default async function connectDB() {
    await mongoose.connect(
        "mongodb://localhost:27017/test"
    ).then(()=> console.log("DATABASE CONNECTED!"));
}
