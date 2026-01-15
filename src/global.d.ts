import 'express';
import { ErrorCode } from './constants/error';
import { StoreUser, User, UserSession } from './generated/prisma/client';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      session?: UserSession;
      storeUser?: StoreUser | null;
    }

    interface Response {
      sendSuccess: (data?: any, message?: string | null) => this;
      sendError: (code: ErrorCode) => this;
    }
  }
}

declare module 'socket.io' {
  interface SocketData {
    sessionId: number;
    userId: number;
    storeUserId?: number;
  }
}

export {};
