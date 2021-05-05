import {Request,Response } from 'express';
import bcrypt from 'bcryptjs';
import session from 'express-session';

declare module 'express-session' {
  export interface SessionData {
    user: { [key: string]: any };
  }
}
import db from '../../db'

export const register = async(req:Request,res:Response)=>{
    const {username,password} = req.body;
    try{
        const hashpassword = await bcrypt.hash(password,12);
        const {rows} = await db.query(
            'INSERT INTO users VALUES($1,$2) RETURNING *;',[username, hashpassword])
        req.session.user= rows;
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

        const {rows} = await db.query('select * from users where username=$1; ',[username]);
        const pass= rows[0].password;
        const isAuth = await bcrypt.compare(password, pass);
        if(isAuth){
            req.session.user= rows;
            res.status(200).json({
            status: 'authed',
            })
        }
        else{
            res.status(401).json({
                status:'not authed',
                message: 'wrong password'
            }).end()
        }
    }
    catch(error){
        res.status(404).json({
            status: 'failed auth',
            message: error
        }).end()
    }
}