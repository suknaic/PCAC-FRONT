import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { RegisterSolicitationController } from '../usecases/cadastroSolicitacao/RegisterSolicitationController';
import { PainelUserController } from '../usecases/painel/PainelUserController';
import { UpdateUserController } from '../usecases/updateUsuario/updateUserController';

const filesSolicitacao = Multer(uploadConfig.upload('solicitacao'));
const fileAvatar = Multer(uploadConfig.upload('avatar'));
const painelRouter = Router();

const painelUserController = new PainelUserController();
const registerSolicitationController = new RegisterSolicitationController();
const updateUserController = new UpdateUserController();

painelRouter.get('/painel', ensureAuthenticated, painelUserController.index);
painelRouter.post(
  '/painel/solicitacao',
  ensureAuthenticated,
  filesSolicitacao.array('arquivos'),
  registerSolicitationController.create
);
painelRouter.post(
  '/painel/update',
  ensureAuthenticated,
  fileAvatar.single('avatar'),
  updateUserController.update
);

export { painelRouter };
