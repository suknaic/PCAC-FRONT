import { Request, Response } from 'express';

import { UserGetSolicitationService } from '../services/UserGetSolicitationService';

class GetLastSolicitationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user_id;
    const getSolicitationService = new UserGetSolicitationService();
    const solicitations = await getSolicitationService.execute({
      usuarioId: id,
    });

    return response.json(solicitations);
  }
}

export { GetLastSolicitationController };
