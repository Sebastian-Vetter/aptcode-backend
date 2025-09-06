import { NextFunction, Request, Response } from "express";
import { PostService } from "../services/post.service";
import { ApiResponse } from "../response/api.response";
import { PostType } from "../types/post.type";

const service = new PostService();

// Create or Upsert
export async function createPost(req: Request, res: Response, next: NextFunction) {
    try {
        let isUpdate = false;

        try {
            await service.getPostById(req.params.id);
            isUpdate = true;
        } catch {
            isUpdate = false;
        }

        if (isUpdate) {
            await updatePost(req, res, next);
            return;
        }

        const post = await service.createPost(req.params.id, req.body);
        return res.status(201).json(new ApiResponse<PostType>("Successfully created post", post));
    } catch (error) {
        next(error);
    }
}

// Read
export async function readPost(req: Request, res: Response, next: NextFunction) {
    try {
        const post = await service.getPostById(req.params.id);
        return res.status(200).json(new ApiResponse<PostType>("Post was found", post));
    } catch (error) {
        next(error);
    }
}

// Update
export async function updatePost(req: Request, res: Response, next: NextFunction) {
    try {
        const post = await service.updatePost(req.params.id, req.body);
        return res.status(200).json(new ApiResponse<PostType>("Post was updated", post));
    } catch (error) {
        next(error);
    }
}

// Delete
export async function deletePost(req: Request, res: Response, next: NextFunction) {
    try {
        await service.deletePost(req.params.id);
        return res.status(204).json(new ApiResponse<boolean>("Post was deleted", true));
    } catch (error) {
        next(error);
    }
}
