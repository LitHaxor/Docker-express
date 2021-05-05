import pkg from 'pg';
import {connectionString} from '../configs'
const {Pool} = pkg

const pool = new Pool({
   connectionString,
})
const app = {
    query: (text: string, params: any)=> pool.query(text,params),
}

export default app