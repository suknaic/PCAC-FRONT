import { Request, Response } from 'express';
import { UserGetSolicitationIdService } from 'services/UserGetSolicitationIdService';

class UserGetSolicitationIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userGetSolicitationService = new UserGetSolicitationIdService();

    const solicitacao = await userGetSolicitationService.execute(id);
  }
}

export { UserGetSolicitationIdController };
