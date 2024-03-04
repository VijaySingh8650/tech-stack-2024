import {Hono} from 'hono';
import { getAPI } from './controller';
import { middleWare } from './middlewares';


const app = new Hono();
app.use(middleWare);
app.route("/get").get(getAPI);

export default app;
