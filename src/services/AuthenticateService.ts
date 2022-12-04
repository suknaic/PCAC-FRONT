import { AppError } from '@error/AppError';
import { compare } from 'bcrypt';

import { prismaClient } from '../prisma';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  usuario: {
    id: string;
    nome: string;
    avatar: string;
    entidade?: string;
  };
}

class AuthenticateService {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const usuario = await prismaClient.usuario.findFirst({
      where: { email },
    });

    if (!usuario) throw new AppError('Email ou Senha Incorreto');

    const conferirSenha = await compare(password, usuario.senha);

    if (!conferirSenha) throw new AppError('Email ou Senha Incorreto');

    const entidade = await prismaClient.entidade.findFirst({
      where: {
        usuarioId: usuario.id,
      },
    });
    return {
      usuario: {
        id: usuario.id,
        nome: usuario.nome,
        avatar: usuario.image,
        entidade: entidade?.nome != null ? entidade.nome : '',
      },
    };
  }
}

export { AuthenticateService };
