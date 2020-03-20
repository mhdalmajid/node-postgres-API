// / <reference types="ProcessEnv" />

declare namespace NodeJS {
    export interface ProcessEnv {
        PGHOST: string;
        PGUSER: string;
        PGDATABASE: string;
        PGPASSWORD: string;
        PGPORT: string;
        PORT: string;
        NODEPORtT: string;

        TYPEORM_CONNECTION: string;
        TYPEORM_HOST: string;
        TYPEORM_USERNAME: string;
        TYPEORM_PASSWORD: string;
        TYPEORM_DATABASE: string;
        TYPEORM_PORT: number;
        TYPEORM_SYNCHRONIZE: boolean;

        SESSION_SECRET: string;
        SESSION_NAME: string;
        SESSION_IDLE_TIMEOUT: string;

        REDIS_PORT: number;
        REDIS_HOST: string;
        REDIS_PASSWORD: string;
    }
}
