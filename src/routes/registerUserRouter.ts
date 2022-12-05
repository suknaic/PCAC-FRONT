import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { RegisterUserController } from '../controllers/RegisterUserController';

const registerUserRouter = Router();
const registerUserController = new RegisterUserController();

const avatarUpload = Multer(uploadConfig.upload('avatar'));

registerUserRouter.get('/cadastro', registerUserController.index);
registerUserRouter.post(
  '/cadastro',
  avatarUpload.single('avatar'),
  registerUserController.create
);

export { registerUserRouter };
