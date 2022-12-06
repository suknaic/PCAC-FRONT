import { Request, Response } from 'express';

import { GetFullUserService } from './GetFullUserService';
import { UserGetSolicitationService } from './UserGetSolicitationService';

class PainelUserController {
  async index(request: Request, response: Response): Promise<void> {
    const { id } = request.session.user;

    const getfulluser = new GetFullUserService();
    const getLastedSolicitation = new UserGetSolicitationService();

    const usuario = await getfulluser.execute(id);
    delete usuario.senha;
    delete usuario.id;

    const solicitacoes = await getLastedSolicitation.execute(id);
    console.log(solicitacoes);

    response.render('painel', { usuario, solicitacoes });
  }
}

export { PainelUserController };
