import {PostRepositoryInterface} from "../interfaces/post.repository.interface";
import {PostType} from "../types/post.type";
import {postModel} from "../models/post.model";

//todo: implement functions
export class PostRepository implements PostRepositoryInterface {
    public async findAll(): Promise<PostType[]> {
        return postModel.find({});
    }

    public async findById(id: string): Promise<PostType | null> {
        return postModel.findOne({id: id})
    }

    public async createPost(post: PostType): Promise<PostType> {
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

    public async delete(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }

    public async update(id: string, update: PostType): Promise<PostType> {
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

    public async exists(id: string): Promise<boolean> {
        return Promise.resolve(false);
    }
}