import { Response, Request } from 'express';

class LogoutController {
  async handle(request: Request, response: Response): Promise<void> {
    request.session.destroy((err) => console.log(err));
    response.redirect('/');
  }
}

export { LogoutController };
