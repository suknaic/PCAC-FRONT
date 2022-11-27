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
}

class RegisterUserService {
  async execute({
    image,
    nome,
    cpf,
    email,
    telefone,
    senha,
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

    await prismaClient.usuario.create({
      data: { image, nome, cpf, email, telefone, senha: password },
    });
  }
}

export { RegisterUserService };
