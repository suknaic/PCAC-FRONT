import { AuthenticateUserController } from 'controllers/AuthenticateUserController';
import { Router } from 'express';

const loginRoutes = Router();

const authenticateUser = new AuthenticateUserController();
loginRoutes.get('/', authenticateUser.index);
loginRoutes.post('/', authenticateUser.create);

export { loginRoutes };
