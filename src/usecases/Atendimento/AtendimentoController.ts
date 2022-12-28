import { prismaClient } from '@prisma';
import { Request, Response } from 'express';

import { GetSolicitations } from './GetSolicitations';

class AtendimentoController {
  async index(request: Request, response: Response): Promise<void> {
    const getSolicitacoes = new GetSolicitations();

    try {
      const solicitacoes = await getSolicitacoes.execute(request);
      console.log(solicitacoes);
      response.render('atendimento', { solicitacoes });
    } catch (error) {
      console.log(error);
    }
  }
}

export { AtendimentoController };
