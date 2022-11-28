import { AppError } from '@error/AppError';
import { Solicitacao } from '@prisma/client';

import { prismaClient } from '../prisma';

interface IRequest {
  usuarioId: string;
  tipo: string;
  assunto: string;
  descricao: string;
}

class RegisterSolicitationService {
  async execute({
    usuarioId,
    tipo,
    assunto,
    descricao,
  }: IRequest): Promise<Solicitacao> {
    const solicitacao = await prismaClient.solicitacao.create({
      data: {
        usuarioId,
        assunto,
        tipo,
        descricao,
        status: 'pendente',
      },
    });

    return solicitacao;
  }
}

export { RegisterSolicitationService };
