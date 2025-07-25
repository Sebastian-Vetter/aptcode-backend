import {AuthorType} from "./author.type";

export type ProjectType = {
    id: string;
    name: string,
    description: string,
    image: string,
    published: boolean,
    releaseDate: string,
    author: AuthorType
    htmlContent: string,
}