import { Request, Response } from 'express';
import { AuthenticateService } from 'services/AuthenticateService';

class AuthenticateUserController {
  async create(request: Request, response: Response): Promise<void> {
    const { email, password } = request.body;
    const authenticateService = new AuthenticateService();
    try {
      const { usuario } = await authenticateService.execute({
        email,
        password,
      });
      request.session.user = {
        id: usuario.id,
      };
      delete usuario.id;
      response.render('painel', { usuario });
    } catch (error) {
      response.render('index', { error });
    }
  }
  async index(request: Request, response: Response): Promise<void> {
    return response.render('index');
  }
}

export { AuthenticateUserController };
