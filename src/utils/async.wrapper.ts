import {NextFunction, RequestHandler} from "express";

export const asyncWrapper = (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) => {
    return (req: any, res: any, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    }
}