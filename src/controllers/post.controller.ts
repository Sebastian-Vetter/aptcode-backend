//postsController to manage data and CRUD methods

import {Request, Response} from "express";
import {PostService} from "../services/post.service";

let service: PostService = new PostService();

//if a document exists -> update document - status 200
export async function createPost(req: Request, res: Response) {
    //todo: add error handling and response management
    await service.createPost(req, res)
}

//get post and return a value
export async function readPost(req: Request, res: Response) {
    //todo: add error handling and response management
    await service.getPostById(req, res)
}

//updating a post
export async function updatePost(req: Request, res: Response) {
    //todo: add error handling and response management
    await service.updatePost(req, res);
}

//deleting a post
export async function deletePost(req: Request, res: Response) {
    //todo: add error handling and response management
    await service.deletePost(req, res)
}