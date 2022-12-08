import { Response, Request } from 'express';

import { RegisterSolicitationService } from './RegisterSolicitationService';

class RegisterSolicitationController {
  async create(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { tipo, assunto, descricao, audio } = request.body;
    const solicitationService = new RegisterSolicitationService();

    try {
      await solicitationService.execute({
        usuarioId: id,
        tipo,
        assunto,
        descricao,
        audio,
      });
      response.json({ message: 'success' }).status(200);
    } catch (error) {
      response.json({ error: error.message }).status(400);
    }
  }
}

export { RegisterSolicitationController };
