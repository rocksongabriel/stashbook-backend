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

export const retrieve = async (id: string) => {
  return await prisma.blocker.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
};

export const update = async (
  id: string,
  newData: Prisma.BlockerUpdateInput
) => {
  return await prisma.blocker.update({
    where: {
      id: id,
    },
    data: newData,
  });
};
