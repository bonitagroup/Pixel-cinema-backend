import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../generated/prisma/client";
import { config } from "../config/index";

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
