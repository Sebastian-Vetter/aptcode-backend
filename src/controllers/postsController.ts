//postsController to manage data and CRUD methods
import {postModel} from "../models/postModel";
import {Post} from "../types/post";

const postsModel = postModel;

//todo: test function
function existPost(post: Post) {
    return post.id === readPost(post.id).id;
}

//todo: database request and build an object with req data
export function createPost (req: Request, res: Response) {
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

    if (existPost(post)) {
        //todo: update
    }else {
        //todo: insert
    }
}

//todo: add a database request
export function readPost (id: String): Post {
    return {
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
}

export function updatePost (req: Request, res: Response) {

}

export function deletePost (req: Request, res: Response) {

}