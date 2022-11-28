import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { RegisterEntitiController } from '../controllers/RegisterEntitiController';

const entidadeImage = Multer(uploadConfig.upload('entidadeImage'));

const registerEntitiRouter = Router();
const registerEntitiController = new RegisterEntitiController();

registerEntitiRouter.post(
  '/cadastro/entidade',
  entidadeImage.single('image'),
  registerEntitiController.handle
);

export { registerEntitiRouter };
