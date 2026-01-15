import type { Request, Response, NextFunction } from 'express';
import { CODES } from '../constants/error';
import { prisma } from '../lib/prisma';
import { verifyAccessToken } from '../utils/auth-jwt';

export const authMiddleware = ({ allowNext = false }: { allowNext?: boolean }) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      if (allowNext) return next();
      return res.sendError(CODES.UNAUTHORIZED);
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      if (allowNext) return next();
      return res.sendError(CODES.INVALID_TOKEN);
    }

    try {
      const decoded = verifyAccessToken(token);

      // Vì đã xóa model UserSession, ta tìm trực tiếp User
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      if (!user) {
        if (allowNext) return next();
        return res.sendError(CODES.UNAUTHORIZED);
      }

      // Gán vào request để sử dụng ở các controller sau
      req.user = user;

      return next();
    } catch (error) {
      if (allowNext) return next();
      return res.sendError(CODES.INVALID_TOKEN);
    }
  };
};
