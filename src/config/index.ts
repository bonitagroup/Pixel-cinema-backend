import 'dotenv/config';

function requiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`❌ Thiếu biến môi trường bắt buộc: ${name}. Hãy kiểm tra lại file .env`);
  }
  return value;
}

export const config = {
  PORT: Number(process.env.PORT) || 3000,

  DATABASE_URL: requiredEnv('DATABASE_URL'),

  DATABASE: {
    host: requiredEnv('DATABASE_HOST'),
    port: Number(process.env.DATABASE_PORT) || 3306,
    user: requiredEnv('DATABASE_USER'),
    password: process.env.DATABASE_PASSWORD || '',
    name: requiredEnv('DATABASE_NAME'),
  },

  ZALO_APP_SECRET: requiredEnv('ZALO_APP_SECRET'),

  JWT: {
    secret: requiredEnv('JWT_SECRET'),
    accessTokenExpiresIn: Number(process.env.ACCESS_TOKEN_EXPIRES_IN) || 3600,
  },
};
