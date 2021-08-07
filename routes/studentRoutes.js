import express from 'express';
import {body} from 'express-validator';
import {getStudentsRecord, getStudentRecord, createStudentRecord, updateStudentRecord, deleteStudentRecord} from '../controllers/studentController.js';
const router=express.Router();
router.get('/una/students', getStudentsRecord);
router.get('/una/students/:id', getStudentRecord); 
router.post('/una/student', [body('name').trim().isLength({min: 4}).withMessage('Name must be of 4 character'), body('email').trim().isEmail().withMessage('Please enter valid Email')], createStudentRecord);
router.put('/una/student/:id', updateStudentRecord);
router.delete('/una/student/:id', deleteStudentRecord);
router.get('*', (req, res)=>{
    res.send('Page Doesnot exists');
});
export default router;
