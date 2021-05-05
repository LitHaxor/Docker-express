import express from 'express'
import { deleteOnePost, getAllPost, getOnePost, setOnePost, updateOnePost } from '../controllers/postController'
import postModel from '../models/postModel'

const postRouter = express.Router()

postRouter.use('/seed', postModel)

postRouter.get('/',getAllPost)
postRouter.get('/:id',getOnePost)
postRouter.post('/', setOnePost)
postRouter.put('/:id', updateOnePost)
postRouter.delete('/:id', deleteOnePost)
export default postRouter