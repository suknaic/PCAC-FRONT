import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { PainelUserController } from '../usecases/painel/PainelUserController';

const painelRouter = Router();

const painelUserController = new PainelUserController();

painelRouter.get('/painel', ensureAuthenticated, painelUserController.index);

export { painelRouter };
