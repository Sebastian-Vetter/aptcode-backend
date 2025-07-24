//postsController to manage data and CRUD methods

import {postModel} from "../models/postModel";
import {Post} from "../types/post";
import {Request, Response} from "express";

const postsModel = postModel;

//get post and return a boolean
export async function existPost(post: Post) {
    try {
        const read = await readPost(post.id);
        if (!read) {
            return false;
        }
        return post.id === read.id
    } catch (error) {
        return false;
    }
}

//if a document exists -> update document - status 200
//if a document doesn't exist -> insert a new document - status 200
//else - status 500
export async function createPost(req: Request, res: Response) {
    let post: Post = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        published: req.body.published,
        releaseDate: req.body.releaseDate,
        author: {
            name: req.body.author.name,
            description: req.body.author.description,
            image: req.body.author.image,
        },
        topics: req.body.topics,
        htmlContent: req.body.htmlContent,
    };

    try {
        if (await existPost(post)) {
            postModel.updateOne(post).then(result => {
                if (result.modifiedCount > 0) {
                    return res.status(200).json({ message: "Post created successfully" });
                } else {
                    return res.status(304).json({ message: "No changes made to the post" });
                }
            });
        } else {
            postModel.insertOne(post).then(result => {
                return res.status(200).json({
                    result: result
                });
            });
        }
    } catch (error) {
        return res.status(500).json({error: error});
    }

    return res.status(500).json({
        status: 500,
        message: "Internal Server Error"
    });
}

//get post and return a value
//if a post was found -> return post
//else -> return null
export async function readPost(id: String): Promise<Post | null> {
    //getting document by id
    try {
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
    } catch (error) {
        return null;
    }

    return null;
}

//updating a post
export async function updatePost(req: Request, res: Response) {
    let post: Post = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        published: req.body.published,
        releaseDate: req.body.releaseDate,
        author: {
            name: req.body.author.name,
            description: req.body.author.description,
            image: req.body.author.image,
        },
        topics: req.body.topics,
        htmlContent: req.body.htmlContent,
    };

    try {
        if (await existPost(post)) {
            postModel.updateOne({id: post.id}, post).then(result => {
                if (result.modifiedCount > 0) {
                    return res.status(200).json({ message: "Post updated successfully" });
                } else {
                    return res.status(304).json({ message: "No changes made to the post" });
                }
            })
        }
    } catch (error) {
        return res.status(500).json({error: error});
    }
}

//deleting a post
export async function deletePost(req: Request, res: Response) {
    let post: Post = {
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        published: req.body.published,
        releaseDate: req.body.releaseDate,
        author: {
            name: req.body.author.name,
            description: req.body.author.description,
            image: req.body.author.image,
        },
        topics: req.body.topics,
        htmlContent: req.body.htmlContent,
    };

    try {
        if (await existPost(post)) {
            postModel.deleteOne({id: post.id}).then(result => {
                return res.status(200).json({})
            })
        } else {
            return res.status(500).json({})
        }
    } catch (error) {
        return res.status(500).json({error: error});
    }
}