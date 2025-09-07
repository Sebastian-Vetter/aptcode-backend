import e, {NextFunction} from "express";
import {Response, Request} from "express";
import {PostNotFoundError} from "../error/post.not.found.error";
import {PostAlreadyExistsError} from "../error/post.already.exists.error";
import {PostNotDeletedError} from "../error/post.not.deleted.error";
import {PostNotCreatedError} from "../error/post.not.created.error";

export function errorMiddleware(error: any, req: Request, res: Response, next: NextFunction ) {
    console.log("middleware cached an error: " + error);
    //post business errors
    if (error instanceof PostNotFoundError) {
        res.status(error.status).json({ error: error.message });
    }else if (error instanceof PostAlreadyExistsError) {
        res.status(error.status).json({ error: error.message });
    }else if (error instanceof PostNotDeletedError) {
        res.status(error.status).json({ error: error.message });
    }else if (error instanceof PostNotCreatedError) {
        res.status(error.status).json({ error: error.message });
    }

    res.status(500).json({ error: error.message });
}