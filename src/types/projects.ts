import {Author} from "./Author";

export type Project = {
    id: string;
    name: string,
    description: string,
    image: string,
    published: boolean,
    releaseDate: string,
    author: Author
    htmlContent: string,
}