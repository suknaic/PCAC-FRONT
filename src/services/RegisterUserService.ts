import { AppError } from '@error/AppError';
import { hash } from 'bcrypt';
import { cpf as UserCpf } from 'cpf-cnpj-validator';

import { prismaClient } from '../prisma';

interface IRequest {
  image?: string;
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
  senha: string;
  endereco: {
    latitude: string;
    longitude: string;
    rua: string;
    numero: number;
    cidade: string;
    uf: string;
  };
}

class RegisterUserService {
  async execute({
    image,
    nome,
    cpf,
    email,
    telefone,
    senha,
    endereco,
  }: IRequest): Promise<void> {
    const emailExists = await prismaClient.usuario.findFirst({
      where: { email },
    });
    if (emailExists) {
      throw new AppError('email ja existe');
    }

    if (!UserCpf.isValid(cpf)) {
      throw new AppError('CPF invalido!');
    }

    const password = await hash(senha, 8);

    const { latitude, longitude, rua, numero, cidade, uf } = endereco;

    try {
      await prismaClient.usuario.create({
        data: {
          image,
          nome,
          cpf,
          email,
          telefone,
          senha: password,
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

export { RegisterUserService };
