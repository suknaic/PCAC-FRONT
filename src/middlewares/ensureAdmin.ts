import { AppError } from '@error/AppError';
import { NextFunction, Request, Response } from 'express';
import { prismaClient } from 'prisma';

async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user_id;

  const usuario = await prismaClient.usuario.findFirst({
    where: { id },
  });

  if (!usuario.isAdmin) throw new AppError("user ins't admin");
  next();
}

export { ensureAdmin };
