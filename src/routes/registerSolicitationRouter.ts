import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { RegisterSolicitationController } from '../usecases/cadastroSolicitacao/RegisterSolicitationController';

const registerSolicitationRouter = Router();

const solicitationController = new RegisterSolicitationController();

registerSolicitationRouter.post(
  '/painel/solicitacao',
  ensureAuthenticated,
  solicitationController.create
);

export { registerSolicitationRouter };
