import {Request,Response } from 'express';
import db from '../../db'

export const register = async(req:Request,res:Response)=>{
    const {username,password} = req.body
    try{
        const {rows} = await db.query(
            'INSERT INTO users VALUES($1,$2)',[username, password])
        res.status(200).json({
            status: 'success',
            user: {rows}
        }).end()
    }
    catch(error){
        res.status(401).json({
            status: 'failed',
            message: error
        })
    }
}

export const login = async(req:Request, res:Response) =>{
    const {username, password} = req.body;
    try{
        const {rows} = await db.query('select password from users where username=$1; ',[username]);
        const pass= rows[0].password;
        if(pass===password) {
            res.status(200).json({
                status:'authed',
            })
        }
        else{
            res.status(401).json({
                status:'not authed',
                message: 'wrong password'
            })
        }
    }
    catch(error){
        res.status(404).json({
            status: 'failed auth',
            message: error
        })
    }
}