import {Context}  from "hono";

export const getAPI = async(c:Context):Promise<Response>=>{
    try{

        return c.json({message:"Get API is working"});
    }
    catch(error){
        return c.json({message:error});
    }
}