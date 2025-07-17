import {Author} from "./author";

export type Post = {
    id: string;
    name: string,
    description: string,
    image: string,
    published: boolean,
    releaseDate: string,
    author: Author,
    topics: string[],
    htmlContent: string,
}
