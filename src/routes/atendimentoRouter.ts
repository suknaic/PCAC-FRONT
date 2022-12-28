import { Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { pagination } from '../middlewares/pagination';
import { AtendimentoController } from '../usecases/Atendimento/AtendimentoController';

const atendimentoRouter = Router();

const atendimentoController = new AtendimentoController();

atendimentoRouter.get('/atendimento', pagination, atendimentoController.index);

export { atendimentoRouter };
