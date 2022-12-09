import { Request, Response, Router } from 'express';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const chatRouter = Router();

chatRouter.get(
  '/painel/solicitacao/:id',
  ensureAuthenticated,
  (request: Request, response: Response) => {
    response.render('chat');
  }
);

export { chatRouter };
