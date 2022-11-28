import { Router } from 'express';

import { GetLastSolicitationController } from '../controllers/GetLastSolicitationController';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const getLastSolicitationRouter = Router();
const getLastSolicitationController = new GetLastSolicitationController();
getLastSolicitationRouter.get(
  '/painel/solicitacao',
  ensureAuthenticated,
  getLastSolicitationController.handle
);

export { getLastSolicitationRouter };
