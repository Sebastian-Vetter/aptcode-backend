//This is the main file, where the server is getting started.

//imports
import express from "express";
import dotenv from "dotenv";
import {connectDB} from "./database/mongo.database";
import {createServer} from "http";
import {Server as SocketIOServer} from "socket.io";

//init
const app = express();
const io = new SocketIOServer(createServer(app), {
    cors: {
        origin: "*",
    }
});

//dotenv
dotenv.config();

//middlewares
app.use(express.json());

//starting rest & socket server
app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server running on port " + process.env.PORT);
});