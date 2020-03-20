import { createConnection } from 'typeorm';
import 'reflect-metadata';
// eslint-disable-next-line import/no-extraneous-dependencies
import dotenv from 'dotenv';
import createApp from './app';

dotenv.config();

createConnection()
    .then(async () => {
        const app = createApp();

        app.listen(app.get('port'), (): void => {
            console.log(
                `Express application is up and running on 
                http:/localhost:${app.get('port')}`,
            );
        });
    })
    .catch(error => console.log(error));
