import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const selectFields = {
  select: {
    id: true,
    text: true,
    description: true,
  },
};

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
    select: {
      plans: selectFields,
      accomplishments: selectFields,
      blockers: selectFields,
    },
  });
};

export const getStandupById = async (id: string) => {
  return await prisma.standup.findUniqueOrThrow({
    where: {
      id: id,
    },
    select: {
      id: true,
      createdAt: true,
      plans: selectFields,
      accomplishments: selectFields,
      blockers: selectFields,
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
