import session from 'express-session';
import { PaginateFunction } from 'prisma-pagination';

declare module 'express-session' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface SessionData {
    user: {
      id: string;
    };
  }
}

declare global {
  namespace Express {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    export interface Request {
      paginate: PaginateFunction;
    }
  }
}
