import express from 'express';
import {Request, Response} from "express";

const router = express.Router();

router.post("/ask", async (req: Request, res: Response) => {
    setTimeout(() => {
        setTimeout(() => {
            return res.status(400).json({error: false, message: "Hi 😉👋, ich werde momentan noch entwickelt, weswegen diese Funktion noch nicht verfügbar ist... 😳. Ich hoffe ich kann dir zu einem anderen Zeitpunkt deine Fragen beantworten. Falls du ein Anliegen hast wende dich an contact@aptcode.de 🧑🏼‍💻. Dort wird dir weiter geholfen 👌", animated: true, from: "bot"});
        },2000)

    },300);
})

export default router;