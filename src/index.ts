import express from 'express';
import {NODE_PORT, connectionString} from '../configs'
import postRouter from './routers/postRouter';
const app = express();

app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success',
        database: connectionString || 'n/a',
    })
})

app.use('/posts', postRouter)

app.listen(NODE_PORT, ()=>{
    console.log(`server listening on http://localhost:${NODE_PORT}`);
})