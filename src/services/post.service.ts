import {PostType} from "../types/post.type"
import {PostAlreadyExistsError} from "../error/post.already.exists.error"
import {PostRepository} from "../repositories/post.repository"
import {PostNotFoundError} from "../error/post.not.found.error"
import {PostNotCreatedError} from "../error/post.not.created.error"
import {PostNotUpdatedError} from "../error/post.not.updated.error"

const repository = new PostRepository()

export class PostService {

    public async createPost(id: string, data: any): Promise<PostType> {
        let existPost = await repository.exists(id)
        if (!existPost) {
            try {
                return await repository.createPost(data)
            } catch (error: any) {
                throw new PostNotCreatedError(502)
            }
        }

        throw new PostAlreadyExistsError(409)
    }

    public async deletePost(id: string) {
        let existsPost = await repository.exists(id)
        if (existsPost) {
            try {
                await repository.delete(id)
            } catch (error: any) {
                throw new PostNotFoundError(502)
            }
        }

        throw new PostNotFoundError(404)
    }

    public async updatePost(id: string, data: any): Promise<PostType> {
        let existsPost = await repository.exists(id)
        if (existsPost) {
            try {
                return await repository.update(id, data);
            } catch (error: any) {
                throw new PostNotUpdatedError(502)
            }
        }

        throw new PostNotFoundError(404)
    }

    public async getPostById(id: string): Promise<PostType> {
        let existPost = await repository.exists(id)
        if (existPost) {
            let post = await repository.findById(id)
            if (!post) {
                throw new PostNotFoundError(404)
            }
            return post
        }

        throw new PostNotFoundError(404)
    }
}
