import { AppError } from '@error/AppError';
import { hash } from 'bcrypt';
import { prismaClient } from 'prisma';

interface IRequest {
  image?: string;
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
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
    const password = await hash(senha, 8);

    if (emailExists) throw new AppError('email ja existe');

    await prismaClient.usuario.create({
      data: { image, nome, cpf, email, telefone, senha: password },
    });
  }
}

export { RegisterUserService };
