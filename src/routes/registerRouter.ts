import { Router } from 'express';

import { RegisterUserController } from '../controllers/RegisterUserController';

const registerRouter = Router();

const registerUserController = new RegisterUserController();

registerRouter.post('/cadastro', registerUserController.handle);

export { registerRouter };
