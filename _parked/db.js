import { PrismaClient } from '@prisma/client';

const g = globalThis;
export const db = g.__db || (g.__db = new PrismaClient());
