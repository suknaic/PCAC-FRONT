import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';

interface IRequest {
  usuarioId: string;
  tipo: string;
  assunto: string;
  descricao: string;
  audio: string;
}

class RegisterSolicitationService {
  async execute({
    usuarioId,
    tipo,
    assunto,
    descricao,
    audio,
  }: IRequest): Promise<void> {
    try {
      await prismaClient.solicitacao.create({
        data: {
          usuarioId,
          assunto,
          tipo,
          descricao,
          audio,
        },
      });
    } catch (error) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export { RegisterSolicitationService };
