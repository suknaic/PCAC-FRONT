import { Router } from 'express';

import { RegisterSolicitationController } from '../controllers/RegisterSolicitationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const registerSolicitation = Router();

const solicitationController = new RegisterSolicitationController();

registerSolicitation.post(
  '/painel/solicitacao',
  ensureAuthenticated,
  solicitationController.handle
);

export { registerSolicitation };
