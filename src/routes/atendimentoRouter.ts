import { Router } from 'express';

import { ensureAttend } from '../middlewares/ensureAttend';
import { pagination } from '../middlewares/pagination';
import { AtendimentoController } from '../usecases/Atendimento/AtendimentoController';

const atendimentoRouter = Router();

const atendimentoController = new AtendimentoController();

atendimentoRouter.get(
  '/atendimento',
  ensureAttend,
  pagination,
  atendimentoController.index
);

export { atendimentoRouter };
