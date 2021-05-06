export const NODE_PORT = process.env.NODE_PORT || '5000';
const pe = process.env
export const connectionString = `postgresql://${pe.PG_USER}:${pe.PG_PASS}@${pe.PG_HOST}:${pe.PG_PORT}/${pe.PG_DB}`;
export const REDIS_URL = pe.REDIS_URL || 'redis';
const port= parseInt(pe.REDIS_PORT, 10);
export const REDIS_PORT= port || 6379;
export const SECRET = pe.SECRET;