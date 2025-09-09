//postsRoute to manage requests and response
import express, {NextFunction} from 'express';
import {createPost, readPost, deletePost, updatePost} from "../controllers/post.controller";
import {Request, Response} from "express";

const router = express.Router();
//get post route
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await readPost(req, res, next));
})
//delete post route
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await deletePost(req, res, next));
})
//create post route
router.post('/:id', async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await createPost(req, res, next));
})
//update post route
router.patch('/:id', async (req: Request, res: Response, next: NextFunction) => {
    return res.json(await updatePost(req, res, next));
})

export default router;