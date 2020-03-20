import { RedisStoreOptions } from 'connect-redis';
import { oneDay } from 'src/helpers/utils/time';

const port = process.env.REDIS_PORT || 6379;
export const redisStoreOptions: RedisStoreOptions = {
    host: process.env.REDIS_HOST || 'localhost',
    port: 6379,
    ttl: oneDay,
};
