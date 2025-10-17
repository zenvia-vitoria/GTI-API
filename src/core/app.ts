import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import { errorHandler } from './error-handler';
import { mainRouter } from './routes';

const app = express();

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())

app.use("/api/v1", mainRouter)

app.use(errorHandler)
export { app };

