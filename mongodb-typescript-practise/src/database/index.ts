import mongoose from "mongoose"

export const ConnectDB = () =>{

    return  mongoose.connect(process.env.MONGO_URI as string).then(()=>{
         console.log(`Connected to DB`);
    }).catch(()=>{
        console.log(`Couldn't connect to DB`);
    });
    
}