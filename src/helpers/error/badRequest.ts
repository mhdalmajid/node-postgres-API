import HttpError from './httpError';

export class BadRequest extends HttpError {
    constructor(message = 'Bad Request') {
        super(message);

        this.status = 400;
    }
}
