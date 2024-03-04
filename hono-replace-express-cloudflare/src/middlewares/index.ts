import {Next, Context} from "hono";

export const middleWare = async (c:Context, next:Next) =>{

    if(c.req.header("Authorization") === "auth"){
        await next();
    }else{
        return c.json({message:"You don't have access"});
    }

}