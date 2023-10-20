import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { Solicitacao } from '@prisma/client';

class GetSolicitationService {
  async execute(solicitacaoId: string): Promise<Solicitacao> {
    try {
      const solicitacao = await prismaClient.solicitacao.findFirst({
        where: { id: solicitacaoId },
        include: {
          mensagens: true,
          Usuario: {
            select: {
              image: true,
              nome: true,
            },
          },
        },
      });

      return solicitacao;
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { GetSolicitationService };
