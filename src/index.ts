import express from 'express';
import {NODE_PORT, connectionString} from '../configs'
import postRouter from './routers/postRouter';
import userRouter from './routers/userRouter';
const app = express();

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