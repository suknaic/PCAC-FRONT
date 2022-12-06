import { Request, Response } from 'express';

class PainelUserController {
  async index(request: Request, response: Response): Promise<void> {
    response.render('painel', {});
  }
}

export { PainelUserController };
