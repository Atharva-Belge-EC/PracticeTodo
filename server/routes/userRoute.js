import express from 'express'
import { createUser, userLogin } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/create', createUser)
userRouter.post('/login', userLogin)

export default userRouter