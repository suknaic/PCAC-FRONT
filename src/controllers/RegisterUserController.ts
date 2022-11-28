import { Response, Request } from 'express';
import { RegisterUserService } from 'services/RegisterUserService';

class RegisterUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      nome,
      cpf,
      email,
      telefone,
      senha,
      latitude,
      longitude,
      rua,
      numero,
      cidade,
      uf,
    } = request.body;
    const avatar = request.file.filename;
    const endereco = {
      latitude,
      longitude,
      rua,
      numero,
      cidade,
      uf,
    };
    const registerUserService = new RegisterUserService();

    await registerUserService.execute({
      image: avatar,
      nome,
      cpf,
      email,
      telefone,
      senha,
      endereco,
    });
    return response.status(201).send();
  }
}

export { RegisterUserController };
