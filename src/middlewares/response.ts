import type { Request, Response, NextFunction } from "express";

import {
  CODES,
  ERROR_HTTP_STATUS,
  ERROR_MESSAGES,
  ErrorCode,
} from "../constants/error";

export const responseMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.sendSuccess = (data = null, message = ERROR_MESSAGES[CODES.SUCCESS]) => {
    return res.status(ERROR_HTTP_STATUS[CODES.SUCCESS]).json({
      error: CODES.SUCCESS,
      message,
      data,
    });
  };

  res.sendError = (code: ErrorCode) => {
    return res.status(ERROR_HTTP_STATUS[code] ?? 500).json({
      error: code,
      message: ERROR_MESSAGES[code] ?? "Unknown error",
      data: null,
    });
  };

  next();
};
