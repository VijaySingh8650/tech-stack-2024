import express from 'express';
import AppRouter from "./router";
import { errorhandler, invalidAPI } from './global-erros';

const app = express();

app.use(express.json());

app.use("/api", AppRouter);

app.use("/*", invalidAPI);

//global errors - in post, User can send invalid data
app.use(errorhandler)

app.listen(7000, ()=>{
    console.log(`Server is connected to ${7000}`);
})
