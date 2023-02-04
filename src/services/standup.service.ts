import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async () => {
  return await prisma.standup.create({
    data: {},
  });
};
