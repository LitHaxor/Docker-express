import express from 'express'
import db from '../../db'
const postModel = express.Router()

postModel.get("/",async (req,res)=> {
    try{
        const posts = await db.query(
            'CREATE TABLE posts( post_id int PRIMARY KEY NOT NULL, post_title varchar NOT NULL, post_description varchar NOT NULL, post_date date NOT NULL )',[])
        res.end()
    } catch(error) {
        console.log(error)
        res.end()
    }
})

export default postModel;