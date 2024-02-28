import { Request, Response } from "express";

export const getAPI = (req:Request,res:Response) => {

       res.send({
         message: "Get Request is working fine."
       });

}

export const postAPI = (req:Request, res:Response) => {
    const {user, password} = req.body;
    res.send({
          message:"Post successful", userLength:user.length
    })
}