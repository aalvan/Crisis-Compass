import Koa from 'koa';
import bodyParser from 'koa-body';
import cors from '@koa/cors';
import router from './routes/index';

const app = new Koa();
const port = 3001;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser({ multipart: true, urlencoded: true }));
app.use(router.routes());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
