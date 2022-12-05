import { Router } from 'express';

import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const loginRoutes = Router();

const authenticateUser = new AuthenticateUserController();
loginRoutes.get('/', authenticateUser.index);
loginRoutes.post('/', authenticateUser.create);

export { loginRoutes };
