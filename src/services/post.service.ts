import {PostType} from "../types/post.type";
import e, {Request} from "express";
import {PostAlreadyExistsError} from "../error/post.already.exists.error";
import {PostRepository} from "../repositories/post.repository";
import {PostNotFoundError} from "../error/post.not.found.error";

const repository = new PostRepository();

//todo: try methods
export async function createPost(req: Request, res: Response): Promise<Error | Boolean> {
    let existPost = await repository.exists(req.params.id);
    if (!existPost) {
        await repository.createPost(req.body);
        return true;
    }

    return new PostAlreadyExistsError("Post already exists");
}

export async function deletePost(req: Request, res: Response): Promise<Error | Boolean> {
    let existsPost = await repository.exists(req.params.id);
    if (existsPost) {
        await repository.delete(req.params.id);
        return true;
    }

    return new PostNotFoundError("Post not found");
}

export async function updatePost(req: Request, res: Response): Promise<Error | Boolean> {
    let existsPost = await repository.exists(req.params.id);
    if (existsPost) {
        await repository.update(req.params.id, req.body);
        return true;
    }

    return new PostNotFoundError("Post not found");
}

export async function getPostById(req: Request, res: Response): Promise<Promise<PostType> | Error> {
    let existPost = await repository.exists(req.params.id);
    if (existPost) {
        return await repository.findById(req.params.id);
    }

    return new PostNotFoundError("Post not found");
}