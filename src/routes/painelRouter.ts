import { Router } from 'express';

import { PainelUserController } from '../controllers/PainelUserController';

const painelRouter = Router();

const painelUserController = new PainelUserController();
painelRouter.get('/painel', painelUserController.index);

export { painelRouter };
