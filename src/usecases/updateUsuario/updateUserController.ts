import { Request, Response } from 'express';

import { UpdateUserService } from './updateUserService';

class UpdateUserController {
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
}

export { UpdateUserController };
