import { Router } from 'express';

import { atendimentoRouter } from './atendimentoRouter';
import { authenticateRouter } from './authenticateRouter';
import { chatRouter } from './chatRouter';
import { painelRouter } from './painelRouter';
import { registerEntitiRouter } from './registerEntitiRouter';
import { solicitationsRouter } from './SolicitationRouter';
import { usersRouter } from './UsersRouter';

const routers = Router();

routers.use(usersRouter);
routers.use(authenticateRouter);
routers.use(painelRouter);
routers.use(atendimentoRouter);
routers.use(chatRouter);
routers.use(registerEntitiRouter);
routers.use(solicitationsRouter);

export { routers };
