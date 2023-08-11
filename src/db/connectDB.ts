import dotenv from 'dotenv';
import mongoose, { ConnectOptions } from 'mongoose';

dotenv.config();

const {DB_USER, DB_PASS, DB_HOST, DB_PORT, DB_NAME} = process.env;

export default async function connectDB() {
    await mongoose.connect(
        `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
        {
            useNewUrlParser :true,
            useUnifiedTopology : true
        } as ConnectOptions
    ).then(()=> console.log("DATABASE CONNECTED!"));
}
