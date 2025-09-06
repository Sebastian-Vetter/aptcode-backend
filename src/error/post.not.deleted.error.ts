export class PostNotDeletedError extends Error {
    status: number;

    constructor(status: number) {
        super("Post was not deleted");
        this.status = status;
    }
}