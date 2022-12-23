import { Response, Request } from 'express';

import { RegisterSolicitationService } from './RegisterSolicitationService';

interface IFiles {
  filename: string;
}

class RegisterSolicitationController {
  async create(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { tipo, assunto, texto, audio } = request.body;
    const files = request.files as IFiles[];

    const arquivos = files.map((file) => file.filename);

    const solicitationService = new RegisterSolicitationService();

    console.log(request.body);
    console.log(arquivos);

    try {
      await solicitationService.execute({
        usuarioId: id,
        tipo,
        assunto,
        texto,
        arquivos,
        audio,
      });
      response.redirect('/painel');
    } catch (error) {
      console.log(error);
    }
  }
}

export { RegisterSolicitationController };
