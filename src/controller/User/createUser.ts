import { getRepository } from 'typeorm';
import { validate } from 'class-validator';
import User from 'src/Typeorm/entity/User';

export const createUser = async (data: User): Promise<any> => {
    const repo = getRepository(User);

    const { firstName, lastName, email, age, password, role } = data;

    const newUser = repo.create({
        firstName,
        lastName,
        email,
        age,
        password,
        role,
    });

    const validatErrors = await validate(newUser);
    /**
     *  validation Error return
     */
    if (validatErrors.length > 0)
        return { status: 'error', statusCode: 400, message: `validation error:${validatErrors}` };

    const checkEmailExist = await repo.findOne({ where: { email } });

    /**
     *  check if email exist in DB
     */
    if (checkEmailExist !== undefined)
        return {
            status: `error`,
            statusCode: 409,
            message: `email ${newUser.email} already exist`,
        };
    /**
     *  create new user
     */
    const resultSaving = await repo.save(newUser);
    if (resultSaving === newUser)
        return {
            status: 'done',
            statusCode: 201,
            message: 'User created',
        };
    /**
     *  return error if did not create user
     */
    return {
        status: `error`,
        statusCode: 500,
        message: `something wrong `,
    };
};
