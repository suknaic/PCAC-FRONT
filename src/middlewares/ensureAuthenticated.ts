import { AppError } from '@error/AppError';
import { NextFunction, Request } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization;

  if (!authToken) throw new AppError('não possui token', 404);

  const [, token] = authToken.split(' ');

  try {
    const { sub } = verify(token, process.env.SECRET_TOKEN) as IPayload;
    request.user_id = {
      id: sub,
    };
    return next();
  } catch {
    throw new AppError('token invalido', 401);
  }
}

export { ensureAuthenticated };
