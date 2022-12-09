import { Request, Response } from 'express';

import { app } from '../../app';
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
    app.locals.usuario = usuario;
    response.render('painel', { solicitacoes });
  }
}

export { PainelUserController };
