import { Response } from 'express';

interface IresJsonData {
    status: string;
    stack?: any;
    statusCode: number;
    message: string;
}
export const resJson = (data: IresJsonData, res: Response): void => {
    const { status, stack, statusCode, message } = data;
    res.status(statusCode).json({
        status,
        stack,
        statusCode,
        message,
    });
};
