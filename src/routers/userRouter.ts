import express from 'express'
import { login, register } from '../controllers/authContoller'
import userModel from '../models/userModel'

const userRouter = express.Router()

userRouter.use('/seed', userModel)
userRouter.post('/register', register)
userRouter.post('/login',login)

export default userRouter