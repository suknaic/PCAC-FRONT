import { Router } from 'express';

import { loginRoutes } from './loginRouter';

const routers = Router();

routers.use(loginRoutes);

export { routers };
