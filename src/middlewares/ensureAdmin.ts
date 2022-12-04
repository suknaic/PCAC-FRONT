import { NextFunction, Request, Response } from 'express';

import { prismaClient } from '../prisma';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.session.user;

  const usuario = await prismaClient.usuario.findFirst({
    where: { id, isAdmin: true },
  });

  if (!usuario) {
    response.redirect('/');
  }
  next();
}

export { ensureAdmin };
