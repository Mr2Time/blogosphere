import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// import routes
import  userRouter  from './routes/user.js';
import {userAuth} from './routes/auth.js';
import connectToDB  from "./db.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// routes routes
app.use('/api', userRouter);
app.use('/api/auth', userAuth);

connectToDB();
mongoose.set("strictQuery", false);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});