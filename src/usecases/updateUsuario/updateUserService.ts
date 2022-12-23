import { AppError } from '@error/AppError';
import { prismaClient } from '@prisma';
import { hash } from 'bcrypt';
import { deletefile } from 'utils/file';
import removeemptyobj from 'utils/removeemptyobj';

interface IRequest {
  user_id: string;
  usuario: {
    image?: string;
    nome?: string;
    cpf?: string;
    email?: string;
    telefone?: string;
    senha?: string;
    password?: string;
    endereco: {
      rua?: string;
      numero?: string;
      cidade?: string;
      uf?: string;
      cep?: string;
      bairro?: string;
    };
  };
}

class UpdateUserService {
  async execute({ user_id, usuario }: IRequest): Promise<void> {
    const user = await prismaClient.usuario.findFirst({
      where: { id: user_id },
    });
    const data = removeemptyobj(usuario);

    const { endereco } = data;
    delete data.endereco;

    console.log(data);
    console.log(user);

    if (data.image && user.image) {
      console.log('entrou aqui');
      await deletefile(`./temp/avatar/${user.image}`);
    }

    if (data.senha) data.password = await hash(data.senha, 8);

    try {
      await prismaClient.usuario.update({
        where: { id: user_id },
        data: {
          ...data,
          endereco: {
            update: {
              ...endereco,
            },
          },
        },
        include: {
          endereco: true,
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { UpdateUserService };
