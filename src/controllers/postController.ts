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

export const setOnePost = async (req: Request,res:Response)=>{
    const {id,title,description} = req.body;
    const date = new Date().toISOString();
    try{
        const {rows} = await db.query('INSERT INTO posts VALUES($1,$2,$3,$4) returning *;',[id,title,description,date]);
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

export const updateOnePost = async (req:Request, res:Response) =>{
    const {title, description} = req.body;
    const id = req.params.id;
    const date = new Date().toISOString();
    try{
        const {rows} = await db.query(
            'UPDATE posts SET post_title=$1, post_description=$2, post_date=$3 WHERE post_id=$4 RETURNING *;',[title,description,date,id])
        res.status(200).json({
            status: 'success',
            post: {rows}
        }).end()
    }
    catch(error){
        res.status(301).json({
            status: 'failed',
            message: error
        }).end()
    }
}

export const deleteOnePost = async (req:Request, res:Response) =>{
    const id = req.params.id;
    try{
        const {rows} = await db.query(
            'DELETE FROM posts WHERE post_id=$1;',[id]);
        res.status(200).json({
            status: 'success',
            post: {rows}
        }).end()
    }
    catch(error){
        res.status(301).json({
            status: 'failed',
            message: error
        }).end()
    }
}