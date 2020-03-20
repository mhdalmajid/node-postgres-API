import { Request, Response, NextFunction } from 'express';
import { getRepository } from 'typeorm';
import { Validator } from 'class-validator';
import User from 'src/Typeorm/entity/User';

export const login = async (data: User): Promise<any> => {
    const validator = new Validator();
    const { email, password } = data;

    const repo = getRepository(User);
    const checkUserExist = await repo
        .createQueryBuilder()
        .select()
        .where({ email })
        .addSelect('password')
        .getOne();

    if (checkUserExist === undefined)
        return {
            status: `error`,
            statusCode: 404,
            message: 'email not exist',
        };

    const compareHashPassword = await checkUserExist.comparePassword(password);

    if (!compareHashPassword)
        return {
            status: `error`,
            statusCode: 404,
            message: 'password incorrect',
        };

    return {
        status: `done`,
        statusCode: 200,
        data: checkUserExist.id,
    };
};
