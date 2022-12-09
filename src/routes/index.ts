import { Router } from 'express';

import { chatRouter } from './chatRouter';
import { loginRoutes } from './loginRouter';
import { logoutRouter } from './logoutRouter';
import { painelRouter } from './painelRouter';
import { registerEntitiRouter } from './registerEntitiRouter';
import { registerSolicitationRouter } from './registerSolicitationRouter';
import { registerUserRouter } from './registerUserRouter';

const routers = Router();

routers.use(loginRoutes);
routers.use(chatRouter);
routers.use(logoutRouter);
routers.use(painelRouter);
routers.use(registerUserRouter);
routers.use(registerEntitiRouter);
routers.use(registerSolicitationRouter);

export { routers };
