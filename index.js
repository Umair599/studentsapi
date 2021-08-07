
import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js'; 
import {connect} from './db.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(studentRoutes);
const PORT = process.env.PORT||5000;
connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port http://localhost:${PORT}`);
    });
  });