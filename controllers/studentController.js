import express from 'express';
import mongoose from 'mongoose';
import StudentModel from '../model/student.js';
import {validationResult} from 'express-validator';
const router = express.Router();
export const getStudentsRecord =async (req, res)=>{
    try{
        const studentsData= await StudentModel.find();
        res.status(200).json(studentsData);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export const getStudentRecord =async (req, res)=>{
    const {id}= req.params;
    try{
        const studentData= await StudentModel.findById(id);
        res.status(200).json(studentData);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export const createStudentRecord = async (req, res)=>{
    const {name, rollNo, address, mobile, email}= req.body;
    const errors=validationResult(req);
    if(!errors.isEmpty()) return res.status(400).json({errors: errors.array()});
    try{
        const studentData= new StudentModel({name, rollNo, address, mobile, email});
        await studentData.save();
        res.status(201).json(studentData);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export const updateStudentRecord =async (req, res)=>{
    const {id}= req.params;
    const body=req.body;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`message: No StudentRecord exists with id: ${id}`);
    try{
        
        await StudentModel.findByIdAndUpdate(id, body, {new: true});
        res.status(200).json(body);
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export const deleteStudentRecord =async (req, res)=>{
    const {id}= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`message: No StudentRecord exists with id: ${id}`);
    try{
        
        await StudentModel.findByIdAndRemove(id);
        res.status(200).json({message: 'Student Record Deleted Successfully'});
    }
    catch(error){
        res.status(404).json({message: error.message});
    }
}
export default router;