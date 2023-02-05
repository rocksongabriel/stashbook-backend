import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { create, all, retrieve, remove } from "../services/standup.service";

// ? The user is only allowed to create a standup object with the
// ? plans they have for the day, the accomplishments and the
// ? blockers are sent through updates
export const createStandup = async (req: Request, res: Response) => {
  const plansToday: Prisma.PlanTodayCreateInput[] = req.body.plansToday;

  if (!plansToday) {
    return res.status(400).json({
      error: {
        message: "plansToday field is required",
      },
      status: 400,
    });
  }

  try {
    const response = await create(plansToday);

    return res.status(201).json({
      data: response,
      message: "Standup created successfully",
      status: 201,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(500).json({
        error: {
          message: error.message,
          meta: error.meta,
        },
        status: 500,
      });
    } else if (error instanceof Prisma.PrismaClientUnknownRequestError) {
      return res.status(500).json({
        error: {
          message: error.message,
        },
        status: 500,
      });
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      return res.status(500).json({
        error: {
          message: error.message,
        },
        status: 500,
      });
    }
  }
};

export const getAllStandups = async (req: Request, res: Response) => {
  const response = await all();

  res.status(200).json({
    data: response,
    message: "All standups fetched successfully",
    status: 200,
  });
};

export const getStandup = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const response = await retrieve(id);

    return res.status(200).json({
      data: response,
      message: "Standup item fetched successfully",
      status: 200,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code == "P2025"
    ) {
      return res.status(404).json({
        error: {
          message: error.message,
        },
        status: 404,
      });
    }
  }
};

export const deleteStandup = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    await retrieve(id);

    const response = await remove(id);

    return res.status(204).json({
      data: response,
      message: "Standup item deleted successfully",
      status: 204,
    });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code == "P2025"
    ) {
      return res.status(404).json({
        error: {
          message: error.message,
        },
        status: 404,
      });
    }
  }
};
