import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { LogoutController } from '../usecases/logout/LogoutController';

const logoutRouter = Router();
const logoutController = new LogoutController();

logoutRouter.get('/sair', ensureAuthenticated, logoutController.handle);

export { logoutRouter };
