import {PostRepositoryInterface} from "../interfaces/post.repository.interface";
import {PostType} from "../types/post.type";
import {postModel} from "../models/post.model";
import e from "express";
import {PostAlreadyExistsError} from "../error/post.already.exists.error";
import {PostNotUpdatedError} from "../error/post.not.updated.error";

export class PostRepository implements PostRepositoryInterface {

    // Alle Posts abrufen
    public async findAll(): Promise<PostType[]> {
        return postModel.find({});
    }

    // Einen Post nach ID abrufen
    public async findById(id: string): Promise<PostType | null> {
        return postModel.findOne({id: id});
    }

    // Post erstellen
    public async createPost(post: PostType): Promise<PostType> {
        const createdPost = new postModel(post);
        if (await createdPost.save()) {
            return post;
        } else {
            throw new PostAlreadyExistsError(409)
        }
    }

    // Post updaten
    public async update(id: string, update: PostType): Promise<PostType> {
        const updatedPost = await postModel.findOneAndUpdate(
            {id},
            update,
        );

        if (!updatedPost) {
            throw new PostNotUpdatedError(502);
        }

        return update;
    }

    // Post löschen
    public async delete(id: string): Promise<boolean> {
        const result = await postModel.deleteOne({id});
        return result.deletedCount > 0;
    }

    // Prüfen, ob Post existiert
    public async exists(id: string): Promise<boolean> {
        const post = await postModel.exists({id});
        return post !== null;
    }
}
