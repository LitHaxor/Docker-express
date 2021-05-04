import express from 'express';
import {NODE_PORT} from '../configs/config'
const app = express();

app.get('/', (req,res)=>{
    res.status(200).json({
        status: 'success'
    })
}).listen(NODE_PORT, ()=>{
    console.log(`server listening on http://localhost:${NODE_PORT}`);
})