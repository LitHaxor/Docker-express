export const NODE_PORT = process.env.NODE_PORT || '5000'; 
const pe = process.env
export const connectionString = `postgresql://${pe.PG_USER}:${pe.PG_PASS}@${pe.PG_HOST}:${pe.PG_PORT}/${pe.PG_DB}`