import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (
  accomplishment: Prisma.AccomplishmentCreateInput
) => {
  return await prisma.accomplishment.create({
    data: accomplishment,
  });
};

export const getAll = async () => {
  return await prisma.accomplishment.findMany();
};

export const retrieve = async (id: string) => {
  return await prisma.accomplishment.findUniqueOrThrow({
    where: {
      id: id,
    },
  });
};

export const update = async (
  id: string,
  updatedData: Prisma.AccomplishmentUpdateInput
) => {
  return await prisma.accomplishment.update({
    where: {
      id: id,
    },
    data: updatedData,
  });
};
