import {PostRepositoryInterface} from "../interfaces/post.repository.interface";
import {PostType} from "../types/post.type";

export class PostRepository implements PostRepositoryInterface {
    async findAll(): Promise<PostType[]> {
        return Promise.resolve([]);
    }

    async findById(id: string): Promise<PostType> {
        return Promise.resolve({
            id: "req.body.id",
            name: "req.body.name",
            description: "req.body.description",
            image: "req.body.image",
            published: false,
            releaseDate: "req.body.releaseDate",
            author: {
                name: "req.body.author.name",
                description: "req.body.author.description",
                image: "req.body.author.image",
            },
            topics: [],
            htmlContent: "req.body.htmlContent",
        });
    }

    async createPost(post: PostType): Promise<PostType> {
        return Promise.resolve({
            id: "req.body.id",
            name: "req.body.name",
            description: "req.body.description",
            image: "req.body.image",
            published: false,
            releaseDate: "req.body.releaseDate",
            author: {
                name: "req.body.author.name",
                description: "req.body.author.description",
                image: "req.body.author.image",
            },
            topics: [],
            htmlContent: "req.body.htmlContent",
        });
    }

    async delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    async update(id: string, update: PostType): Promise<PostType> {
        return Promise.resolve({
            id: "req.body.id",
            name: "req.body.name",
            description: "req.body.description",
            image: "req.body.image",
            published: false,
            releaseDate: "req.body.releaseDate",
            author: {
                name: "req.body.author.name",
                description: "req.body.author.description",
                image: "req.body.author.image",
            },
            topics: [],
            htmlContent: "req.body.htmlContent",
        });
    }

    async exists(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }
}