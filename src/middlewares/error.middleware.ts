import {NextFunction} from "express";
import {Response, Request} from "express";
import {PostNotFoundError} from "../error/post.not.found.error";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction ) {
    console.log("ERROR: " + next);

    if (error instanceof PostNotFoundError) {
        res.status(error.status).json({ error: error.message });
    }
}