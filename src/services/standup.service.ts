import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const selectFields = {
  select: {
    id: true,
    title: true,
    description: true,
  },
};

export const create = async (plansToday: Prisma.PlanTodayCreateInput[]) => {
  return await prisma.standup.create({
    data: {
      plansToday: {
        create: plansToday,
      },
    },
  });
};

export const getAll = async () => {
  return await prisma.standup.findMany({
    select: {
      id: true,
      createdAt: true,
      plansToday: selectFields,
      plansTomorrow: selectFields,
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
      plansToday: selectFields,
      plansTomorrow: selectFields,
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
