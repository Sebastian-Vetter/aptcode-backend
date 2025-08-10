//postsRoute to manage requests and response
import express from 'express';
import {createPost, existPost, readPost, deletePost, updatePost} from "../controllers/post.controller";
import {Request, Response} from "express";

const router = express.Router();
//get post route
router.get('/:id', async (req: Request, res: Response) => {
    return res.json(await readPost(req.params.id));
})
//delete post route
router.delete('/:id', async (req: Request, res: Response) => {
    return res.json(await deletePost(req, res));
})
//create post route
router.post('/:id', async (req: Request, res: Response) => {
    return res.json(await createPost(req, res));
})
//update post route
router.patch('/:id', async (req: Request, res: Response) => {
    return res.json(await updatePost(req, res));
})