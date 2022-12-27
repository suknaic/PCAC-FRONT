import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { SolicitationController } from '../usecases/Solicitations/SolicitationController';

const chatRouter = Router();

const solicitationController = new SolicitationController();

chatRouter.get(
  '/painel/solicitacao/:id',
  ensureAuthenticated,
  solicitationController.get
);

export { chatRouter };
