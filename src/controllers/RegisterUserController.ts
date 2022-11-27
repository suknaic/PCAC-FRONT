import { Response, Request } from 'express';
import { RegisterUserService } from 'services/RegisterUserService';

class RegisterUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, cpf, email, telefone, senha } = request.body;
    const avatar = request.file.filename;

    const registerUserService = new RegisterUserService();

    await registerUserService.execute({
      image: avatar,
      nome,
      cpf,
      email,
      telefone,
      senha,
    });
    return response.status(201).send();
  }
}

export { RegisterUserController };
