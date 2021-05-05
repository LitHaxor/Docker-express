import express from 'express'
import { getAllPost, getOnePost } from '../controllers/postController'
import postModel from '../models/postModel'

const postRouter = express.Router()

postRouter.use('/seed', postModel)

postRouter.get('/',getAllPost)
postRouter.get('/:id',getOnePost)

export default postRouter