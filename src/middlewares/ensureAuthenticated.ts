import { NextFunction, Request, Response } from 'express';

async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user } = request.session;
  if (!user) return response.redirect('/');
  return next();
}

export { ensureAuthenticated };
