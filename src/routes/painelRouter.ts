import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { RegisterSolicitationController } from '../usecases/cadastroSolicitacao/RegisterSolicitationController';
import { PainelUserController } from '../usecases/painel/PainelUserController';

const files = Multer(uploadConfig.upload('entidadeImage'));

const painelRouter = Router();

const painelUserController = new PainelUserController();
const registerSolicitationController = new RegisterSolicitationController();

painelRouter.get('/painel', ensureAuthenticated, painelUserController.index);
painelRouter.post(
  '/painel/solicitacao',
  ensureAuthenticated,
  files.array('arquivos'),
  registerSolicitationController.create
);

export { painelRouter };
