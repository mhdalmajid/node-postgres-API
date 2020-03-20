const {
    TYPEORM_CONNECTION,
    TYPEORM_DATABASE,
    TYPEORM_HOST,
    TYPEORM_PASSWORD,
    TYPEORM_PORT,
    TYPEORM_USERNAME,
} = process.env;

export const dbConfig = {
    type: TYPEORM_CONNECTION,
    host: TYPEORM_HOST,
    port: TYPEORM_PORT,
    username: TYPEORM_USERNAME,
    password: TYPEORM_PASSWORD,
    database: TYPEORM_DATABASE,
};
