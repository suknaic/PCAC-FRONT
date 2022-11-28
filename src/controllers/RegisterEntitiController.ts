import { Request, Response } from 'express';
import { RegisterEntitiService } from 'services/RegisterEntitiService';

class RegisterEntitiController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      image,
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

    const registerEntitiService = new RegisterEntitiService();

    const endereco = {
      latitude,
      longitude,
      rua,
      numero,
      cidade,
      uf,
    };

    await registerEntitiService.execute({
      image,
      usuarioId,
      nome,
      tipo,
      detalhe,
      telefone,
      endereco,
    });

    return response.status(201).send();
  }
}

export { RegisterEntitiController };
