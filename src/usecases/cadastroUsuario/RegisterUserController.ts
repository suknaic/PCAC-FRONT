import { Response, Request } from 'express';

import { RegisterUserService } from './RegisterUserService';

class RegisterUserController {
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

export { RegisterUserController };
