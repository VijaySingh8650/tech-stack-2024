import express from 'express'; 
import { getAPI, postAPI } from '../controllers';

const app = express.Router();

app.route("/test").get(getAPI).post(postAPI);



export default app;