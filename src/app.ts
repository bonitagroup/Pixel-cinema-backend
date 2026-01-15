import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import { responseMiddleware } from './middlewares/response';

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/uploads', express.static('uploads'));

app.use(responseMiddleware);

export default app;
