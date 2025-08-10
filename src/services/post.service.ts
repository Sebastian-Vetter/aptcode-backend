import {PostType} from "../types/post.type";
import {Request} from "express";
import {PostRepository} from "../repositories/post.repository";

const repository = new PostRepository();

//todo: implement functions
export function createPost(req: Request, res: Response): Error | Boolean {
    return new Error("methode not implemented.");
}

export function deletePost(req: Request, res: Response): Error | Boolean {
    return new Error("methode not implemented.");
}

export function updatePost(req: Request, res: Response): Error | Boolean {
    return new Error("methode not implemented.");
}

export function getPostById(req: Request, res: Response): Promise<PostType> | Error {
    return new Error("methode not implemented.");
}