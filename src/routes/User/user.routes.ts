import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import { catchAsync } from 'src/helpers/error/catchAsync';
import { createUser, getUserById, getAllUsers, login } from '@controller/index';

// interface IreqRes
// {
//     (key: number, value: string): void;
// };

const userPath = '/user';
const router = Router();

const resHandler = (res: Response, result: any): void => {
    res.status(result.statusCode).json({ result });
};

const signupHandler: RequestHandler = async (req, res) => {
    const result = await createUser(req.body);
    resHandler(res, result);
};

const getUserByIdHandler: RequestHandler = async (req, res) => {
    const result = await getUserById(req.params.id);
    resHandler(res, result);
};
const getUserByEmailHandler: RequestHandler = async (req, res) => {
    const result = await getUserById(req.params.id);
    resHandler(res, result);
};
const getUsersHandler: RequestHandler = async (req, res) => {
    const result = await getAllUsers();
    resHandler(res, result);
};
const loginHandler: RequestHandler = async (req, res) => {
    const { loginSession } = req.session!;
    if (loginSession !== undefined) {
        resHandler(res, { status: 'done', statusCode: 200, message: 'you already logged in' });
    } else {
        const result = await login(req.body);
        req.session!.loginSession = { id: result.id, isLoggedIn: true };
        resHandler(res, result);
    }
};
const logoutHandler: RequestHandler = async (req, res) => {
    const { loginSession } = req.session!;
    if (loginSession !== undefined) {
        req.session!.destroy(error => {
            resHandler(res, { status: 'done', statusCode: 200, message: 'you logged out' });
        });
    } else {
        resHandler(res, { status: 'done', statusCode: 400, message: 'login please' });
    }
};
router.get('/all', catchAsync(getUsersHandler));
router.get('/id/:id', catchAsync(getUserByIdHandler));
router.get('/email/:email', catchAsync(getUserByEmailHandler));
router.post('/signup', catchAsync(signupHandler));
router.post('/login', catchAsync(loginHandler));
router.post('/logout', catchAsync(logoutHandler));

export { router, userPath };
