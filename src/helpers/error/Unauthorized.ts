import HttpError from './httpError';

export class Unauthorized extends HttpError {
    constructor(message = 'Unauthorized') {
        super(message);

        this.status = 401;
    }
}
