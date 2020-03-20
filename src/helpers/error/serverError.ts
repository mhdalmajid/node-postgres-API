import { Request, Response, NextFunction } from 'express';
import { resJson } from 'src/helpers/utils/ResponseHandler';

export const serverError = (error: any, req: Request, res: Response, next: NextFunction): void => {
    if (!error.status) {
        console.error(error.stack);
    }
    const dataRes = {
        status: 'error',
        stack: error.stack,
        statusCode: error.statusCode || 500,
        message: error.message || 'Internal Server Error',
    };
    resJson(dataRes, res);
};
