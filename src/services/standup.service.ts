import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async (plans: Prisma.PlanCreateInput[]) => {
  return await prisma.standup.create({
    data: {
      plans: {
        create: plans,
      },
    },
  });
};

export const getAll = async () => {
  return await prisma.standup.findMany();
};
