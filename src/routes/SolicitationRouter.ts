import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { SolicitationController } from '../usecases/Solicitations/SolicitationController';

const files = Multer(uploadConfig.upload('solicitacao'));

const solicitationsRouter = Router();

const solicitationController = new SolicitationController();

solicitationsRouter.post(
  '/chat/solicitacao/:solicitacaoId',
  ensureAuthenticated,
  files.array('arquivos'),
  solicitationController.update
);

solicitationsRouter.post(
  '/painel/solicitacao',
  ensureAuthenticated,
  files.array('arquivos'),
  solicitationController.create
);

export { solicitationsRouter };
