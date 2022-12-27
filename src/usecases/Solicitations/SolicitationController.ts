import { Response, Request } from 'express';

import { GetSolicitationService } from './GetSolicitationIdService';
import { RegisterSolicitationService } from './RegisterSolicitationService';
import { UpdateSolicitation } from './UpdateSolicitationService';

interface IFiles {
  filename: string;
}

class SolicitationController {
  async get(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const userGetSolicitationService = new GetSolicitationService();

    const solicitacao = await userGetSolicitationService.execute(id);

    console.log(solicitacao);

    response.render('chat', { solicitacao });
  }

  async update(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { solicitacaoId } = request.params;
    const { texto, audio } = request.body;
    const files = request.files as IFiles[];

    const arquivos = files.map((file) => file.filename);

    const updateSolicitationService = new UpdateSolicitation();

    try {
      updateSolicitationService.execute({
        usuarioId: id,
        solicitacaoId,
        texto,
        audio,
        arquivos,
      });
      response.redirect('back');
    } catch (error) {
      console.log(error);
    }
  }

  async create(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const { tipo, assunto, texto, audio } = request.body;
    const files = request.files as IFiles[];

    const arquivos = files.map((file) => file.filename);

    const solicitationService = new RegisterSolicitationService();

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

export { SolicitationController };
