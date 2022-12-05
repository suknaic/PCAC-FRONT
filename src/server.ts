import 'express-async-errors';
import 'dotenv/config';
import { AppError } from '@error/AppError';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { engine } from 'express-handlebars';
import session from 'express-session';
import { resolve } from 'path';

import { routers } from './routes';

const app = express();
app.use(
  session({
    secret: process.env.SECRET_TOKEN,
    resave: true,
    saveUninitialized: true,
  })
);
app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
  })
);
app.set('view engine', '.hbs');
app.set('views', resolve(__dirname, 'views'));
app.use('/public', express.static(resolve(__dirname, '..', 'public')));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  console.error(`${err.message}`, 500);
  return response.status(500).json({
    status: 'error',
    message: err.message,
  });
});
app.use(routers);

app.listen(process.env.PORT_SERVER, () => {
  console.log(`servidor rodando na port ${process.env.PORT_SERVER}`);
});
