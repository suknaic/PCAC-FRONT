import { Router } from 'express';

import { loginRoutes } from './loginRouter';
import { registerEntitiRouter } from './registerEntitiRouter';
import { registerSolicitation } from './registerSolicitation';
import { registerUserRouter } from './registerUserRouter';
import { userGetLastSolicitationRouter } from './userGetLastSolicitationRouter';

const routers = Router();

routers.use(loginRoutes);
routers.use(registerUserRouter);
routers.use(registerEntitiRouter);
routers.use(registerSolicitation);
routers.use(userGetLastSolicitationRouter);

export { routers };
