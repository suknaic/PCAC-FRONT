import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { AuthenticateUserController } from '../usecases/Authenticate/AuthenticateUserController';

const authenticateRouter = Router();

const authenticateUser = new AuthenticateUserController();

authenticateRouter.get('/', authenticateUser.index);
authenticateRouter.post('/', authenticateUser.create);
authenticateRouter.get('/sair', ensureAuthenticated, authenticateUser.exit);

export { authenticateRouter };
