//import { log } from 'console';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';

dotenv.config();

mongoose
.connect(process.env.MONGO)
.then(() => {
    console.log('MongoDB is connected');
})
.catch((err) => {
    console.log(err);
});

const app = express();


// This line "const app = express();" helps in creating an Express App. .
//This app object represents the Express server and provides methods to define
// routes, handle requests, set up middleware, and start the server.

app.listen(3000, () => {
    console.log('Server is running on port 3000!!!');
});

app.use('/api/user', userRouter);