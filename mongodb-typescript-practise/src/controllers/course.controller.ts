import { Request, Response } from "express";
import {z} from "zod";
import { Course } from "../model";
import {courseZSchema} from "../common-types";




export const addCourses = async(req:Request, res:Response):Promise<Response>=>{
   try{

       let validateCourse = courseZSchema.safeParse(req.body);
       if(!validateCourse.success){
         return res.status(400).send({message:"Please send proper data"});
       }
       await Course.create({price: validateCourse?.data?.price, title: validateCourse?.data?.title});
       return res.status(200).send({message:"Course created"});
          
   }
   catch(error){
    return res.status(500).send({error});
   }
}