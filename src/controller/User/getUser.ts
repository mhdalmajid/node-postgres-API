import { getRepository } from 'typeorm';
import User from 'src/Typeorm/entity/User';
import { Validator } from 'class-validator';

export const getAllUsers = async (): Promise<any> => {
    const repo = getRepository(User);

    const users = await repo.find();

    if (users === undefined)
        return {
            status: `error`,
            statusCode: 200,
            message: 'there is no users',
        };
    return {
        status: `done`,
        statusCode: 200,
        data: users,
    };
};

export const getUserById = async (id: User['id']): Promise<any> => {
    const Validation = new Validator();
    const repo = getRepository(User);

    if (!Validation.isUUID(id))
        return {
            status: `error`,
            statusCode: 400,
            message: 'id must be an UUID',
        };
    const user = await repo.findOne({ where: { id } });

    if (user === undefined)
        return {
            status: `error`,
            statusCode: 404,
            message: 'user not found',
        };
    return {
        status: `done`,
        statusCode: 200,
        data: user,
    };
};

export const getUserByEmail = async (email: User['email']): Promise<any> => {
    const Validation = new Validator();
    const repo = getRepository(User);

    if (!Validation.isEmail(email))
        return {
            status: `error`,
            statusCode: 400,
            message: 'email incorrect',
        };
    const user = await repo.findOne({ where: { email } });

    if (user === undefined)
        return {
            status: `error`,
            statusCode: 404,
            message: 'user not found',
        };
    return {
        status: `done`,
        statusCode: 200,
        data: user,
    };
};
