import { Response, Request } from 'express';

import { RegisterSolicitationService } from './RegisterSolicitationService';

class RegisterSolicitationController {
  async create(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { tipo, assunto, descricao } = request.body;

    console.log(request.body);

    const solicitationService = new RegisterSolicitationService();

    try {
      await solicitationService.execute({
        usuarioId: id,
        tipo,
        assunto,
        descricao,
      });
      response.redirect('/painel');
    } catch (error) {
      response.render('/painel', { error });
    }
  }
}

export { RegisterSolicitationController };
