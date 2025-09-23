//This is the main file, where the server is getting started.

//imports
import express from "express";
import dotenv from "dotenv";

import {errorMiddleware} from "./middlewares/error.middleware";
import postRoute from "./routes/post.route";
import chatBotRoute from "./routes/chat.bot.route";
import {connectDB} from "./database/mongo.database";
import cors from "cors";

//init
const app = express();

//dotenv
dotenv.config();

app.use(cors({
    origin: "*",
}));

app.use("/posts", postRoute);
app.use("/chatbot", chatBotRoute);

//middlewares
app.use(express.json());
app.use(errorMiddleware);

//starting rest & socket server
app.listen(process.env.PORT, () => {
    connectDB();
    console.log("Server running on port " + process.env.PORT);
});