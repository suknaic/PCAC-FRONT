import { Router } from 'express';

import { getLastSolicitationRouter } from './getLastSolicitationRouter';
import { loginRoutes } from './loginRouter';
import { registerEntitiRouter } from './registerEntitiRouter';
import { registerSolicitation } from './registerSolicitation';
import { registerUserRouter } from './registerUserRouter';

const routers = Router();

routers.use(loginRoutes);
routers.use(registerUserRouter);
routers.use(registerEntitiRouter);
routers.use(registerSolicitation);
routers.use(getLastSolicitationRouter);

export { routers };
