import { Solicitacao } from '@prisma/client';

import { prismaClient } from '../prisma';

interface IRequest {
  usuarioId: string;
}

class GetSolicitationService {
  async execute({ usuarioId }: IRequest): Promise<Solicitacao[]> {
    const solicitacoes = await prismaClient.solicitacao.findMany({
      where: { usuarioId },
      take: 5,
      orderBy: {
        createAt: 'desc',
      },
      include: {
        mensagens: true,
      },
    });

    return solicitacoes;
  }
}

export { GetSolicitationService };
