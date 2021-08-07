import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(studentRoutes);
const CONNECTION_URL='mongodb+srv://umair-khalid-599:Inspiron^6304@studentsapi.kbpf1.mongodb.net/StudentsDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT||5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true}).then(()=>app.listen(PORT, ()=>console.log(`Server Running on Port http://localhost:${PORT}`))).catch((error)=>console.log(`${error} Fail to connect`));
mongoose.set('useFindAndModify', false);