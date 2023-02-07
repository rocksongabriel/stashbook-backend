import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (blocker: Prisma.BlockerCreateInput) => {
  return await prisma.blocker.create({
    data: blocker,
  });
};

export const all = async () => {
  return await prisma.blocker.findMany();
};
