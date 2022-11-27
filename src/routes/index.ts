import { Router } from 'express';

import { loginRoutes } from './loginRouter';
import { registerRouter } from './registerRouter';

const routers = Router();

routers.use(loginRoutes);
routers.use(registerRouter);

export { routers };
