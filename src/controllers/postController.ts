import {Request,Response } from 'express'
import db from '../../db'



export const getAllPost = async (req: Request,res:Response)=>{
    try{
        const {rows} = await db.query('SELECT * FROM posts;',[]);
        res.status(200).json({
            status: 'success',
            post: rows
        }).end()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: 'failed',
            message: 'internal server error'
        }).end()
    }
}
export const getOnePost = async (req: Request,res:Response)=>{
    const id = req.params.id
    try{
        const {rows} = await db.query('SELECT * FROM posts WHERE post_id=$1;',[id]);
        res.status(200).json({
            status: 'success',
            post: rows
        }).end()
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            status: 'failed',
            message: 'internal server error'
        }).end()
    }
}