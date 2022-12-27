import { Router } from 'express';
import { ensureAuthenticated } from 'middlewares/ensureAuthenticated';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { UserController } from '../usecases/Usuario/UserController';

const usersRouter = Router();
const userController = new UserController();

const file = Multer(uploadConfig.upload('avatar'));

usersRouter.get('/cadastro', userController.index);

usersRouter.post('/cadastro', file.single('avatar'), userController.create);

usersRouter.post(
  '/painel/update',
  ensureAuthenticated,
  file.single('avatar'),
  userController.update
);

export { usersRouter };
