export class PostNotCreatedError extends Error {
    status: number;

    constructor(status: number) {
        super("Post was not created");
        this.status = status;
    }
}