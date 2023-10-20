import { prismaClient } from '@prisma';
import { Request } from 'express';

interface IPaginatedResult<T> {
  data: T[];
  meta: {
    total: number;
    lastPage: number;
    currentPage: number;
    perPage: number;
    prev: number | null;
    next: number | null;
  };
}

class GetSolicitationsService {
  async execute(request: Request): Promise<IPaginatedResult<unknown>> {
    const solicitacoes = await request.paginate(prismaClient.solicitacao, {
      where: {
        respondida: false,
      },
      select: {
        id: true,
        createAt: true,
        assunto: true,
        tipo: true,
        Usuario: {
          select: {
            image: true,
            nome: true,
            Entidade: {
              select: {
                nome: true,
                tipo: true,
              },
            },
          },
        },
      },
      orderBy: {
        createAt: 'asc',
      },
    });
    return solicitacoes;
  }
}

export { GetSolicitationsService };
