import 'dotenv/config';

export const config = {
    PORT: Number(process.env.PORT) || 3000,

    DATABASE_URL: process.env.DATABASE_URL!,

    DATABASE: {
        host: process.env.DATABASE_HOST!,
        port: Number(process.env.DATABASE_PORT) || 3306,
        user: process.env.DATABASE_USER!,
        password: process.env.DATABASE_PASSWORD || '',
        name: process.env.DATABASE_NAME!,
    },

    ZALO_APP_SECRET: process.env.ZALO_APP_SECRET!,

    JWT: {
        secret: process.env.JWT_SECRET!,
        accessTokenExpiresIn:
            Number(process.env.ACCESS_TOKEN_EXPIRES_IN) || 3600,
    },
};
