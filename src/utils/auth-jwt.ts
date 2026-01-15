import jwt from "jsonwebtoken";

import { config } from "../config/index";

export interface JwtPayload {
  userId: number;
  sessionId: number;
}

export const signAccessToken = (payload: JwtPayload): string => {
  return jwt.sign(payload, config.JWT.secret, {
    expiresIn: config.JWT.accessTokenExpiresIn,
  });
};

export const verifyAccessToken = (token: string): JwtPayload => {
  return jwt.verify(token, config.JWT.secret) as JwtPayload;
};
