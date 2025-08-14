export class PostNotCreatedError extends Error {
    status: number;
    message: string;

    constructor(message: string, status: number) {
        super();
        this.message = message;
        this.status = status;
    }
}