//mongodb file to manage database connection

//imports
import mongoose from 'mongoose';

//methode for connecting to the database
export const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI!).then(() => {
        console.log("MongoDB Connected!");
    });
}
