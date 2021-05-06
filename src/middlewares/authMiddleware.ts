import {Request,Response, NextFunction} from 'express'

const protect= (req:Request, res:Response, next: NextFunction)=>{
    const {user} = req.session;
    if(!user){
        return res.status(401).json({
            status: 'failed',
            message: 'unauthorized'
        })
        // @ts-ignore
        req.user = user;

        next();
    }
}

export default protect;