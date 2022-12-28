import { NextFunction, Request, Response } from 'express';
import { createPaginator } from 'prisma-pagination';

async function pagination(
  request: Request,
  response: Response,
  next: NextFunction
) {
  request.paginate = createPaginator({
    page: String(request.query.page),
    perPage: 5,
  });

  next();
}

export { pagination };
