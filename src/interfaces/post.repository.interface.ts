import {PostType} from "../types/post.type";

export interface PostRepositoryInterface {
    createPost(post: PostType): Promise<PostType>;
    findById(id: string): Promise<PostType>;
    findAll(): Promise<PostType[]>;
    update(id: string, update: PostType): Promise<PostType>;
    delete(id: string): Promise<boolean>;
    exists(id: string): Promise<boolean>;
}