import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import User from 'src/Typeorm/entity/User';
import { validate } from 'class-validator';

export const editUser = async (req: Request, res: Response): Promise<any> => {
    // Get the ID from the url
    const { id } = req.params;

    // Get values from the body
    const { username, role } = req.body;

    // Try to find user on database
    const userRepository = getRepository(User);
    let user;
    try {
        user = await userRepository.findOneOrFail(id);
    } catch (error) {
        // If not found, send a 404 response
        res.status(404).send('User not found');
        return;
    }

    // Validate the new values on model
    user.firstName = username;
    user.role = role;
    const errors = await validate(user);
    if (errors.length > 0) {
        res.status(400).send(errors);
        return;
    }

    // Try to safe, if fails, that means username already in use
    try {
        await userRepository.save(user);
    } catch (e) {
        res.status(409).send('username already in use');
        return;
    }
    // After all send a 204 (no content, but accepted) response
    res.status(204).send();
};
