import {PostType} from "../types/post.type";
import {Request, Response} from "express";
import {PostAlreadyExistsError} from "../error/post.already.exists.error";
import {PostRepository} from "../repositories/post.repository";
import {PostNotFoundError} from "../error/post.not.found.error";
import {PostNotCreatedError} from "../error/post.not.created.error";

const repository = new PostRepository();

export class PostService {
    //todo: try methods
    public async createPost(req: Request, res: Response): Promise<Error | Boolean> {
        try {
            let existPost = await repository.exists(req.params.id);
            if (!existPost) {
                await repository.createPost(req.body);
                return true;
            }
        } catch (error: any) {
            return new PostNotCreatedError(error.message, 502);
        }

        return new PostAlreadyExistsError("Post already exists", 409);
    }

    public async deletePost(req: Request, res: Response): Promise<Error | Boolean> {
        let existsPost = await repository.exists(req.params.id);
        if (existsPost) {
            await repository.delete(req.params.id);
            return true;
        }

        return new PostNotFoundError("Post not found", 404);
    }

    public async updatePost(req: Request, res: Response): Promise<Error | Boolean> {
        let existsPost = await repository.exists(req.params.id);
        if (existsPost) {
            await repository.update(req.params.id, req.body);
            return true;
        }

        return new PostNotFoundError("Post not found", 404);
    }

    public async getPostById(req: Request, res: Response): Promise<Promise<PostType> | Error> {
        let existPost = await repository.exists(req.params.id);
        if (existPost) {
            let post = await repository.findById(req.params.id);
            if (!post) {
                return new PostNotFoundError("Post not found", 404);
            }
            return post;
        }

        return new PostNotFoundError("Post not found", 404);
    }
}
