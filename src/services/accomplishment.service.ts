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
