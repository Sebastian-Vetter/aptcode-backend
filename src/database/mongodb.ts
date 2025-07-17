//mongodb file to manage database connection

//imports
import mongoose from 'mongoose';

export const connectDB = () => {
    let url: string = process.env.MONGODB_URI!;

    mongoose.connect(url).then(() => {
        console.log("MongoDB Connected!");
    });
}
