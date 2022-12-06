import { Request, Response } from 'express';
import { RegisterEntitiService } from 'services/RegisterEntitiService';

class RegisterEntitiController {
  async create(request: Request, response: Response): Promise<void> {
    const {
      usuarioId,
      nome,
      tipo,
      detalhe,
      telefone,
      latitude,
      longitude,
      rua,
      numero,
      cidade,
      uf,
    } = request.body;

    const image = request.file ? request.file.filename : 'null';
    const registerEntitiService = new RegisterEntitiService();

    const endereco = {
      latitude,
      longitude,
      rua,
      numero,
      cidade,
      uf,
    };
    try {
      await registerEntitiService.execute({
        image,
        usuarioId,
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
