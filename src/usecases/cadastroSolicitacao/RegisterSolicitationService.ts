import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';

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
  }: IRequest): Promise<void> {
    try {
      await prismaClient.solicitacao.create({
        data: {
          usuarioId,
          assunto,
          tipo,
          descricao,
        },
      });
    } catch (error) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export { RegisterSolicitationService };
