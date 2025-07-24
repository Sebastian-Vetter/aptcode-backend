//postsRoute to manage requests and response
import express from 'express';
import {createPost} from "../controllers/postsController";
import {Request, Response} from "express";

const router = express.Router();


router.get('/', async (req: Request, res: Response) => {
    createPost(req,res);
})

