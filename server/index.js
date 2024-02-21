import express, { application } from 'express'
import cors from 'cors'
import userRouter from './routes/userRoute.js';
import mongoose from 'mongoose';
import 'dotenv/config'
import todoRouter from './routes/todoRouter.js';

const app = express();

const port = 3000;

app.use(cors())
app.use(express.json())

app.use('/api/user', userRouter)
app.use('/api/todo', todoRouter)

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("database connected !!");
    app.listen(port, () => {
        console.log(`server started @${port}`);
    })
})
