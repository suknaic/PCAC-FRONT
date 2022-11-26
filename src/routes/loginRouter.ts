import { AuthenticateUserController } from 'controllers/AuthenticateUserController';
import { Router } from 'express';

const loginRoutes = Router();

const authenticateUser = new AuthenticateUserController();
loginRoutes.post('/', authenticateUser.handle);

export { loginRoutes };
