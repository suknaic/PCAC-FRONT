import { Response, Request } from 'express';

import { RegisterSolicitationService } from './RegisterSolicitationService';

class RegisterSolicitationController {
  async create(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { tipo, assunto, texto, audio } = request.body;
    const arquivo = request.body.arquivo ? request.body.file : 'null';
    const solicitationService = new RegisterSolicitationService();

    console.log(request.body);

    try {
      await solicitationService.execute({
        usuarioId: id,
        tipo,
        assunto,
        texto,
        arquivo,
        audio,
      });
      response.json({ message: 'success' }).status(200);
    } catch (error) {
      console.log(error);
    }
  }
}

export { RegisterSolicitationController };
