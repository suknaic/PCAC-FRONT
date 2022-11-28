import { AppError } from '@error/AppError';

import { prismaClient } from '../prisma';

interface IRequest {
  usuarioId: string;
  image: string;
  nome: string;
  tipo: string;
  telefone?: string;
  detalhe?: string;
  endereco: {
    latitude: string;
    longitude: string;
    rua: string;
    numero: string;
    cidade: string;
    uf: string;
  };
}

class RegisterEntitiService {
  async execute({
    usuarioId,
    image,
    nome,
    tipo,
    detalhe,
    telefone,
    endereco,
  }: IRequest): Promise<void> {
    const usuarioExist = await prismaClient.usuario.findFirst({
      where: { id: usuarioId },
    });

    if (!usuarioExist) throw new AppError('Error, Usuario nao existe');
    const { latitude, longitude, rua, numero, cidade, uf } = endereco;
    try {
      await prismaClient.entidade.create({
        data: {
          usuarioId,
          image,
          nome,
          tipo,
          detalhe,
          telefone,
          endereco: {
            create: {
              latitude,
              longitude,
              rua,
              numero,
              cidade,
              uf,
            },
          },
        },
      });
    } catch (error) {
      throw new AppError(error.message);
    }
  }
}

export { RegisterEntitiService };
