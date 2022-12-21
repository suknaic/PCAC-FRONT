import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { Usuario } from '@prisma/client';

class GetFullUserService {
  async execute(id: string): Promise<Usuario> {
    try {
      const usuario = await prismaClient.usuario.findFirst({
        where: { id },
        include: {
          Entidade: true,
          endereco: true,
        },
      });

      return usuario;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetFullUserService };
