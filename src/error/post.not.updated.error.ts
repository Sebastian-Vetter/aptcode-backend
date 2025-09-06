export class PostNotUpdatedError extends Error {
    status: number;

    constructor(status: number) {
        super("Post was not updated");
        this.status = status;
    }
}