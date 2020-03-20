import { RequestHandler, Request, Response, NextFunction } from 'express';

export class ErrorHandler extends Error {
    statusCode: number;

    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
