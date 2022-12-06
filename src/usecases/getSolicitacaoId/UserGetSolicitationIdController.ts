import { Request, Response } from 'express';

import { UserGetSolicitationIdService } from './UserGetSolicitationIdService';

class UserGetSolicitationIdController {
  async handle(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const userGetSolicitationService = new UserGetSolicitationIdService();

    const solicitacao = await userGetSolicitationService.execute(id);
  }
}

export { UserGetSolicitationIdController };
