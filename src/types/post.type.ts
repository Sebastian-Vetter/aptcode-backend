import {AuthorType} from "./author.type";

export type PostType = {
    id: string;
    name: string,
    description: string,
    image: string,
    published: boolean,
    releaseDate: string,
    author: AuthorType,
    topics: string[],
    htmlContent: string,
}
