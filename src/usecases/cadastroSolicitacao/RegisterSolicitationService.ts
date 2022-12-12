import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';

interface IRequest {
  usuarioId: string;
  tipo: string;
  assunto: string;
  texto: string;
  arquivo: string;
  audio: string;
}

class RegisterSolicitationService {
  async execute({
    usuarioId,
    tipo,
    assunto,
    texto,
    arquivo,
    audio,
  }: IRequest): Promise<void> {
    try {
      await prismaClient.solicitacao.create({
        data: {
          usuarioId,
          tipo,
          assunto,
          mensagens: {
            create: {
              usuarioId,
              texto,
              arquivo,
              audio,
            },
          },
        },
      });
    } catch (error) {
      throw new AppError(error.message, error.statusCode);
    }
  }
}

export { RegisterSolicitationService };
