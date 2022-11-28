import { Request, Response } from 'express';

import { GetSolicitationService } from '../services/GetSolicitationService';

class GetLastSolicitationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user_id;
    const getSolicitationService = new GetSolicitationService();
    const solicitations = await getSolicitationService.execute({
      usuarioId: id,
    });

    return response.json(solicitations);
  }
}

export { GetLastSolicitationController };
