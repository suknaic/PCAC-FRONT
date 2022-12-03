import 'express-async-errors';
import 'dotenv/config';
import { AppError } from '@error/AppError';
import bodyParser from 'body-parser';
import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';

import { routers } from './routes';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: process.env.SECRET_TOKEN }));
app.use(routers);

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

app.listen(process.env.PORT_SERVER, () =>
  console.log(`servidor rodando na port ${process.env.PORT_SERVER}`)
);
