import { prismaClient } from '@prisma';
import { Usuario } from '@prisma/client';

class GetAtendenteService {
  async execute(id: string): Promise<Usuario> {
    const usuario = await prismaClient.usuario.findFirst({
      where: { id },
    });

    return usuario;
  }
}

export { GetAtendenteService };
