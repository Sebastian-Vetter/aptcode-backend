export class PostNotFoundError extends Error {
    status: number;

    constructor(status: number) {
        super("Post couldn't be found")
        this.status = status;
    }
}