//postsRoute to manage requests and response
import express from 'express';
import {createPost, existPost, readPost, deletePost, updatePost} from "../controllers/post.controller";
import {Request, Response} from "express";

const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    return res.json(await readPost(req.body.id));
})

router.delete('/', async (req: Request, res: Response) => {
    return res.json(await deletePost(req, res));
})

router.post('/', async (req: Request, res: Response) => {
    return res.json(await createPost(req, res));
})

router.patch('/', async (req: Request, res: Response) => {
    return res.json(await updatePost(req, res));
})