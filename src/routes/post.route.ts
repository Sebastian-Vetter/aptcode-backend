//postsRoute to manage requests and response
import express from 'express';
import {createPost, existPost, readPost, deletePost, updatePost} from "../controllers/post.controller";
import {Request, Response} from "express";

const router = express.Router();

router.get('/:id', async (req: Request, res: Response) => {
    return res.json(await readPost(req.params.id));
})

router.delete('/:id', async (req: Request, res: Response) => {
    return res.json(await deletePost(req, res));
})

router.post('/:id', async (req: Request, res: Response) => {
    return res.json(await createPost(req, res));
})

router.patch('/:id', async (req: Request, res: Response) => {
    return res.json(await updatePost(req, res));
})