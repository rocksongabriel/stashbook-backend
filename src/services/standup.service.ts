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
  return await prisma.standup.findMany({
    include: {
      plans: true,
      accomplishments: true,
      blockers: true,
    },
  });
};

export const getStandupById = async (id: string) => {
  const select = {
    select: {
      id: true,
      text: true,
    },
  };

  return await prisma.standup.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      createdAt: true,
      plans: select,
      accomplishments: select,
      blockers: select,
    },
  });
};

export const removeStandupById = async (id: string) => {
  return await prisma.standup.delete({
    where: {
      id: id,
    },
  });
};
