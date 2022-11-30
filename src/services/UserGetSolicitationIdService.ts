import { AppError } from '@error/AppError';
import { Solicitacao } from '@prisma/client';

import { prismaClient } from '../prisma';

class UserGetSolicitationIdService {
  async execute(id: string): Promise<Solicitacao> {
    try {
      const solicitacao = await prismaClient.solicitacao.findFirst({
        where: { id },
        include: {
          mensagens: true,
        },
      });

      return solicitacao;
    } catch (error) {
      throw new AppError(`${error.message}`);
    }
  }
}

export { UserGetSolicitationIdService };
