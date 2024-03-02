import express from 'express'; 
import { buyCourses, postUser } from '../controllers/user.controller';
import { addCourses } from '../controllers/course.controller';

const app = express.Router();

app.route("/user").get().post(postUser)
app.route("/user/course/:id").put(buyCourses);
app.route("/course").post(addCourses);



export default app;