import 'express-async-errors';
import 'dotenv/config';
import { AppError } from '@error/AppError';
import express, { NextFunction, Request, Response } from 'express';

import { routers } from './routes';

const app = express();
app.use(express.json());
app.use(routers);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'internal server Error!',
  });
});

app.listen(process.env.PORT_SERVER, () =>
  console.log(`servidor rodando na port ${process.env.PORT_SERVER}`)
);
