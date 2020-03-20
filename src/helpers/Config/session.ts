import { SessionOptions } from 'express-session';
import { oneDay } from 'src/helpers/utils/time';

export const SESSION_OPTIONS: SessionOptions = {
    secret: process.env.SESSION_SECRET || 'secrit',
    name: process.env.SESSION_NAME || 'localhost',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: oneDay },
};
