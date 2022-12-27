import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { hash } from 'bcrypt';
import { cpf as UserCpf } from 'cpf-cnpj-validator';

interface IRequest {
  image?: string;
  nome: string;
  cpf: string;
  email: string;
  telefone?: string;
  senha: string;
  endereco: {
    rua: string;
    numero: string;
    cidade: string;
    uf: string;
    cep: string;
    bairro: string;
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
  }: IRequest): Promise<string> {
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

    const { rua, numero, cidade, uf } = endereco;

    try {
      const usuario = await prismaClient.usuario.create({
        data: {
          image,
          nome,
          cpf,
          email,
          telefone,
          senha,
          password,
          endereco: {
            create: {
              rua,
              numero,
              cidade,
              uf,
            },
          },
        },
      });
      return usuario.id;
    } catch (error) {
      console.log(error);
      throw new AppError(error.message);
    }
  }
}

export { RegisterUserService };
