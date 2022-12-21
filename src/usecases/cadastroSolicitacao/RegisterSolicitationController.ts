import { Response, Request } from 'express';

import { RegisterSolicitationService } from './RegisterSolicitationService';

class RegisterSolicitationController {
  async create(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { tipo, assunto, texto, audio } = request.body;
    const arquivos = request.file;
    const solicitationService = new RegisterSolicitationService();

    console.log(request.body);
    console.log(arquivos);

    // try {
    //   await solicitationService.execute({
    //     usuarioId: id,
    //     tipo,
    //     assunto,
    //     texto,
    //     arquivos,
    //     audio,
    //   });
    //   response.json({ message: 'success' }).status(200);
    // } catch (error) {
    //   console.log(error);
    // }
  }
}

export { RegisterSolicitationController };
