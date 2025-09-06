export class PostAlreadyExistsError extends Error {
    status: number;

    constructor(status: number) {
        super("Post already exists");
        this.status = status;
    }
}