import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { RegisterSolicitationController } from '../usecases/cadastroSolicitacao/RegisterSolicitationController';

const registerSolicitation = Router();

const solicitationController = new RegisterSolicitationController();

registerSolicitation.post(
  '/painel/solicitacao',
  ensureAuthenticated,
  solicitationController.create
);

export { registerSolicitation };
