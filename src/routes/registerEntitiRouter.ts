import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { RegisterEntitiController } from '../usecases/cadastroEntidade/RegisterEntitiController';

const entidadeImage = Multer(uploadConfig.upload('entidadeImage'));

const registerEntitiRouter = Router();
const registerEntitiController = new RegisterEntitiController();

registerEntitiRouter.get('/cadastro/entidade', registerEntitiController.index);
registerEntitiRouter.post(
  '/cadastro/entidade',
  ensureAuthenticated,
  entidadeImage.single('image'),
  registerEntitiController.create
);

export { registerEntitiRouter };
