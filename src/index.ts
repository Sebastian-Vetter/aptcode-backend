//This is the main file, where the server is getting started.

//imports
import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./database/mongodb";

//init
const app = express();
dotenv.config();

//middlewares
app.use(express.json());


//starting server on port 3001
app.listen(3001, () => {
    connectDB();
    console.log("Server running on port 3000");
});