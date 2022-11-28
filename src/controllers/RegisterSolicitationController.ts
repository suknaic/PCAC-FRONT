import { Response, Request } from 'express';
import { RegisterSolicitationService } from 'services/RegisterSolicitationService';

class RegisterSolicitationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user_id;
    const { tipo, assunto, descricao } = request.body;

    const solicitationService = new RegisterSolicitationService();

    const solicitacao = await solicitationService.execute({
      usuarioId: id,
      tipo,
      assunto,
      descricao,
    });

    return response.json({ solicitacao });
  }
}

export { RegisterSolicitationController };
