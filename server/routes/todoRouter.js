import express from 'express'
import { createTodo } from '../controllers/todo.js';
import { authUser } from '../middleware/auth.js';

const todoRouter = express.Router();

todoRouter.post('/create', authUser, createTodo)

export default todoRouter