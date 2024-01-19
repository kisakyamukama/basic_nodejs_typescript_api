 import express from "express";
 const router = express.Router();
 import { Student } from "../models/student.model.mjs";

 // get all students

 router.get('/getStudents',  async(req, res) =>{
    try{
        const data = await Student.find({});
        console.log('Student retrieved');
        res.status(200).json(data);

    } catch(e){
        console.log('Error while retrieving students: ', e); 

    }
 });

 // post student
 router.post('/addStudent', async(req, res) =>{
    try{
        const data = await Student.create(req.body);
        res.status(200).json(data);

    } catch(e){
        console.log('Error while creating student: ', e);

    }
 });

 // get a student
 router.get('/:id', async(req, res) =>{
    try{
        const data = await Student.findById(req.params.id);
        console.log('A student os retrieved by ID: ');
        res.status(200).json(data);

    } catch(e){
        console.log(`Error while retrieving a student: ${e}`);

    }
 });



 export {router}