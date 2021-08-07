import express from 'express';
import {getStudentsRecord, getStudentRecord, createStudentRecord, updateStudentRecord, deleteStudentRecord} from '../controllers/studentController.js';
const router=express.Router();
router.get('/una/students', getStudentsRecord);
router.get('/una/students/:id', getStudentRecord);
router.post('/una/student', createStudentRecord);
router.put('/una/student/:id', updateStudentRecord);
router.delete('/una/student/:id', deleteStudentRecord);
router.get('*', (req, res)=>{
    res.send('Page Doesnot exists');
});
export default router;