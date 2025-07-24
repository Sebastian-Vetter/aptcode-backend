//postsController to manage data and CRUD methods

import {postModel} from "../models/postModel";
import {Post} from "../types/post";
import { Request, Response } from "express";

const postsModel = postModel;

//todo: test function
//get post and return a boolean
export async function existPost(post: Post) {
    const read = await readPost(post.id);
    if (!read) {
        return false;
    }
    return post.id === read.id
}

//todo: database request and build an object with req data
//if a document exists -> update document - status 200
//if a document doesn't exist -> insert a new document - status 200
//else - status 500
export async function createPost (req: Request, res: Response) {
    let post: Post = {
        id: "",
        name: "",
        description: "",
        image: "",
        published: false,
        releaseDate: "",
        author: {
            name: "",
            description: "",
            image: ""
        },
        topics: [],
        htmlContent: ""
    };

    if (await existPost(post)) {
        postModel.updateOne(post).then(result => {
            return res.status(200).json({
                result: result
            });
        });
    }else {
        postModel.insertOne(post).then(result => {
            return res.status(200).json({
                result: result
            });
        });
    }

    return res.status(500).json({
        status: 500,
        message: "Internal Server Error"
    });
}

//get post and return a value
//if a post was found -> return post
//else -> return null
export async function readPost (id: String): Promise<Post | null> {
    //getting document by id
    const document = await postModel.findOne({id: id});

    if (document) {
        //mapping of post
        return {
            id: document.id,
            name: document.name,
            description: document.description,
            image: document.image,
            published: document.published,
            releaseDate: document.releaseDate,
            author: {
                name: document.name,
                description: document.description,
                image: document.image
            },
            topics: document.topic,
            htmlContent: document.htmlContent
        };
    }

    return null;
}

//todo: update Post method
export function updatePost (req: Request, res: Response) {

}

//todo; delete Post method
export function deletePost (req: Request, res: Response) {

}