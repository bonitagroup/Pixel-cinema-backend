import 'dotenv/config';
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { config } from '../config/index';
import { PrismaClient } from 'src/generated/prisma/client';

const adapter = new PrismaMariaDb({
  host: config.DATABASE.host,
  user: config.DATABASE.user,
  password: config.DATABASE.password,
  database: config.DATABASE.name,
  port: config.DATABASE.port,
  connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
