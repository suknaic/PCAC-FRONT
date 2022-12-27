import { Response, Request } from 'express';

import { RegisterUserService } from './RegisterUserService';
import { UpdateUserService } from './updateUserService';

class UserController {
  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const image = request.file?.filename ? request.file.filename : '';
    const {
      nome,
      cpf,
      email,
      telefone,
      senha,
      rua,
      numero,
      cidade,
      uf,
      cep,
      bairro,
    } = request.body;

    const usuario = {
      image,
      nome,
      cpf,
      email,
      telefone,
      senha,
      endereco: { rua, numero, cidade, uf, cep, bairro },
    };

    const updateUserService = new UpdateUserService();
    try {
      updateUserService.execute({ user_id: id, usuario });
      response.redirect('back');
    } catch (err) {
      console.log(err);
    }
  }

  async create(request: Request, response: Response): Promise<void> {
    console.log(request.body);
    const {
      nome,
      cpf,
      email,
      telefone,
      senha,
      rua,
      numero,
      cidade,
      uf,
      cep,
      bairro,
    } = request.body;
    const avatar = request.file ? request.file.filename : 'null';
    const endereco = {
      rua,
      numero,
      cidade,
      uf,
      cep,
      bairro,
    };

    console.log(request.body);

    const registerUserService = new RegisterUserService();

    try {
      const usuarioId = await registerUserService.execute({
        image: avatar,
        nome,
        cpf,
        email,
        telefone,
        senha,
        endereco,
      });
      request.session.user = {
        id: usuarioId,
      };
      response.redirect('cadastro/entidade');
    } catch (error) {
      response.render('cadastro-usuario', { error });
    }
  }
  async index(request: Request, response: Response): Promise<void> {
    response.render('cadastro-usuario');
  }
}

export { UserController };
