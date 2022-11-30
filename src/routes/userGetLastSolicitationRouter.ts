import { Router } from 'express';

import { GetLastSolicitationController } from '../controllers/GetLastSolicitationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const userGetLastSolicitationRouter = Router();
const getLastSolicitationController = new GetLastSolicitationController();
userGetLastSolicitationRouter.get(
  '/painel/solicitacao',
  ensureAuthenticated,
  getLastSolicitationController.handle
);

userGetLastSolicitationRouter.get(
  '/painel/solicitacao/:id',
  ensureAuthenticated
);

export { userGetLastSolicitationRouter };
