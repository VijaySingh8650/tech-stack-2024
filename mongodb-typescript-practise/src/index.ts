import express from 'express';
import AppRouter from "./router";
import dotenv from "dotenv";
dotenv.config();

import { errorhandler, invalidAPI } from './global-erros';
import { ConnectDB } from './database';

const app = express();

app.use(express.json());

app.use("/api", AppRouter);

app.use("/*", invalidAPI);

//global errors - in post, User can send invalid data
app.use(errorhandler);

app.listen(7000, async()=>{

    await ConnectDB();
    console.log(`Connected to server is connected to ${7000}`);

})
