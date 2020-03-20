import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import session from 'express-session';
import routes from '@routes/routes';
import morgan from 'morgan';
// eslint-disable-next-line import/no-extraneous-dependencies
import errorHandler from 'errorhandler';
import { notFound, serverError } from 'src/helpers/error/index';
import { SESSION_OPTIONS } from 'src/helpers/Config';
import connectRedis from 'connect-redis';
import Redis from 'redis';
import { redisStoreOptions } from 'src/helpers/Config/redis';

const createApp = (): Application => {
    const app = express();
    const isDevEnv = process.env.NODE_ENV === 'development';
    const isProdEnv = process.env.NODE_ENV === 'production';
    app.set('port', process.env.NODEPORT);
    if (isDevEnv) {
        app.use(morgan('dev'));
        app.use(errorHandler());
    }
    app.disable('x-powered-by');

    const redisClient = Redis.createClient();
    const redisStore = connectRedis(session);

    app.use(
        session({
            ...SESSION_OPTIONS,
            store: new redisStore({
                ...redisStoreOptions,
                client: redisClient,
            }),
        }),
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use(compression());
    app.use(routes);
    app.use(notFound);
    app.use(serverError);

    return app;
};

export default createApp;
