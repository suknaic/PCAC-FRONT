import { Request, Response } from 'express';

import { GetAtendenteService } from './GetAtendenteService';
import { GetSolicitationsService } from './GetSolicitationsService';

class AtendimentoController {
  async index(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;
    const getSolicitationsService = new GetSolicitationsService();
    const getAtendenteService = new GetAtendenteService();

    try {
      const solicitacoes = await getSolicitationsService.execute(request);
      const usuario = await getAtendenteService.execute(id);

      console.log(solicitacoes);

      response.render('atendimento', { solicitacoes, usuario });
    } catch (error) {
      console.log(error);
    }
  }
}

export { AtendimentoController };
