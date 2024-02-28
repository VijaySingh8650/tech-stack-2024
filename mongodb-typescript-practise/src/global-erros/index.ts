import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

export function errorhandler(err:ErrorRequestHandler,req:Request,res:Response,next:NextFunction){
    res.send({message:"Something went wrong"});
}

export function invalidAPI (req:Request, res:Response){
    res.send({message:"Invalid API call"});
}