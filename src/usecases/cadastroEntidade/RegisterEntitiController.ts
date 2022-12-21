import { Request, Response } from 'express';

import { RegisterEntitiService } from './RegisterEntitiService';

class RegisterEntitiController {
  async create(request: Request, response: Response): Promise<void> {
    const { nome, tipo, detalhe, telefone, rua, numero, cidade, uf } =
      request.body;

    const { id } = request.session.user;

    const image = request.file ? request.file.filename : 'null';
    const registerEntitiService = new RegisterEntitiService();

    const endereco = {
      rua,
      numero,
      cidade,
      uf,
    };
    try {
      await registerEntitiService.execute({
        image,
        usuarioId: id,
        nome,
        tipo,
        detalhe,
        telefone,
        endereco,
      });
      response.redirect('/painel');
    } catch (error) {
      response.render('cadastro-entidade', { error });
    }
  }
  async index(request: Request, response: Response): Promise<void> {
    response.render('cadastro-entidade');
  }
}

export { RegisterEntitiController };
