import express from 'express'
import db from '../../db'
const userModel = express.Router()

userModel.get('/', async(req,res)=>{
    try{
        const data = await db.query('CREATE TABLE users (username varchar PRIMARY KEY NOT NULL, password varchar NOT NULL);',[]);
        res.status(200).json({
            status:'success',
            send: data
        }).end()
    }
    catch(error){
        res.status(400).json({
            status: 'failed',
            message: error
        }).end()
    }
})

export default userModel