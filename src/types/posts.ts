import {Author} from "./Author";

export type Posts = {
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
