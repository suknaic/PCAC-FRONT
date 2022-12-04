import session from 'express-session';

declare module 'express-session' {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  export interface SessionData {
    user: {
      id: string;
    };
  }
}
