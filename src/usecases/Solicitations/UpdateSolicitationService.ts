import { prismaClient } from '@prisma';

interface IRequest {
  usuarioId: string;
  solicitacaoId: string;

  texto: string;
  arquivos: string[];
  audio: string;
}

class UpdateSolicitation {
  async execute({
    usuarioId,
    solicitacaoId,
    texto,
    arquivos,
    audio,
  }: IRequest): Promise<void> {
    console.log({ usuarioId, solicitacaoId, texto, arquivos, audio });

    try {
      await prismaClient.mensagem.create({
        data: {
          usuarioId,
          solicitacaoId,
          texto,
          arquivos,
          audio,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { UpdateSolicitation };
