import express, {
    Application,
    NextFunction,
    Request,
    Response,
    ErrorRequestHandler,
  } from 'express';
import router from './routes';

const app = express();
app.use(express.json());

app.use(router.exportRouter())

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err.statusCode);
    
    res
      .status(err.statusCode ? err.statusCode : 500)
      .send({ message: err.message, type: err.errorType });
});
export default app;