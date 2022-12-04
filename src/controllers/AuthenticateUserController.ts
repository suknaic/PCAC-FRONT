import { Request, Response } from 'express';
import { AuthenticateService } from 'services/AuthenticateService';

class AuthenticateUserController {
  async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateService = new AuthenticateService();
    try {
      const { usuario, token } = await authenticateService.execute({
        email,
        password,
      });

      return response.json({ usuario, token });
    } catch (error) {
      return response.json({ error: error.message });
    }
  }
  async index(request: Request, response: Response): Promise<void> {
    return response.render('index');
  }
}

export { AuthenticateUserController };
