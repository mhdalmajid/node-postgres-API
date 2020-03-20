import { Request, Response, NextFunction } from 'express';
import { resJson } from 'src/helpers/utils/ResponseHandler';

export const notFound = (req: Request, res: Response): void => {
    const dataRes = { status: 'error', statusCode: 404, message: 'Not found' };
    resJson(dataRes, res);
};
