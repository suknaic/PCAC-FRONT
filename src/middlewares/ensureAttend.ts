import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '../prisma';

async function ensureAttend(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { user } = request.session;
  if (!user) return response.redirect('/');

  const usuario = await prismaClient.usuario.findFirst({
    where: { id: user.id, isAttend: true },
  });

  if (!usuario) return response.redirect('/');
  return next();
}

export { ensureAttend };
