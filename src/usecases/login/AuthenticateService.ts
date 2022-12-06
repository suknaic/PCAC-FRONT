import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { compare } from 'bcrypt';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  usuario: {
    id: string;
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
    return {
      usuario: {
        id: usuario.id,
      },
    };
  }
}

export { AuthenticateService };
