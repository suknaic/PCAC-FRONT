import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { Solicitacao } from '@prisma/client';

class UserGetSolicitationService {
  async execute(usuarioId: string): Promise<Solicitacao[]> {
    try {
      const solicitacoes = await prismaClient.solicitacao.findMany({
        where: { usuarioId },
        take: 5,
        orderBy: {
          createAt: 'desc',
        },
      });
      return solicitacoes;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { UserGetSolicitationService };
