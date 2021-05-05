import express from 'express';
import session from 'express-session'
import redis from 'redis';
import Store from 'connect-redis';
import {NODE_PORT, connectionString,REDIS_URL,REDIS_PORT,SECRET} from '../configs'
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';

const RedisStore= Store(session);

const redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

const app = express();

// save cookie
app.use(session({
    store: new RedisStore({
        client: redisClient,
    }),
    secret: SECRET,
    cookie:{
        httpOnly:true,
        secure: false,
        maxAge: 120000,
        // @ts-ignore
        saveUninitialized: false,
        resave: false
    },
}));

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success',
        database: connectionString || 'n/a',
    })
})

app.use('/api/posts', postRouter)
app.use('/api/users',userRouter)
app.listen(NODE_PORT, ()=>{
    console.log(`server listening on http://localhost:${NODE_PORT}`);
})