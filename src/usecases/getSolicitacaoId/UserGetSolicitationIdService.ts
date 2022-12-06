import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { Solicitacao } from '@prisma/client';

class UserGetSolicitationIdService {
  async execute(solicitacaoId: string): Promise<Solicitacao> {
    try {
      const solicitacao = await prismaClient.solicitacao.findFirst({
        where: { id: solicitacaoId },
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
