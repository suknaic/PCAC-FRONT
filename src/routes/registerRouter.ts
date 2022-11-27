import { Router } from 'express';
import Multer from 'multer';

import uploadConfig from '../config/upload';
import { RegisterUserController } from '../controllers/RegisterUserController';

const registerRouter = Router();
const registerUserController = new RegisterUserController();

const avatarUpload = Multer(uploadConfig.upload('avatar'));

registerRouter.post(
  '/cadastro',
  avatarUpload.single('avatar'),
  registerUserController.handle
);

export { registerRouter };
