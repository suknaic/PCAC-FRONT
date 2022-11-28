import { AppError } from '@error/AppError';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { prismaClient } from '../prisma';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  usuario: {
    nome: string;
    avatar: string;
    entidade?: string;
  };
  token: string;
}

class AuthenticateService {
  async execute({ email, password }: IRequest): Promise<IResponse> {
    const usuario = await prismaClient.usuario.findFirst({
      where: { email },
    });

    if (!usuario) throw new AppError('Email ou Senha Incorreto');

    const conferirSenha = await compare(password, usuario.senha);

    if (!conferirSenha) throw new AppError('Email ou Senha Incorreto');

    const token = sign({}, process.env.SECRET_TOKEN, {
      subject: usuario.id,
      expiresIn: '1d',
    });

    const entidade = await prismaClient.entidade.findFirst({
      where: {
        usuarioId: usuario.id,
      },
    });
    return {
      usuario: {
        nome: usuario.nome,
        avatar: usuario.image,
        entidade:
          entidade?.nome != null
            ? entidade.nome
            : 'não possui entidade cadastrada',
      },
      token,
    };
  }
}

export { AuthenticateService };
