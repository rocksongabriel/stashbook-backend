import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import { create, getAll } from "../services/standup.service";

// ? The user is only allowed to create a standup object with the
// ? plans they have for the day, the accomplishments and the
// ? blockers are sent through updates
export const createStandup = async (req: Request, res: Response) => {
  const plans: Prisma.PlanCreateInput[] = req.body.plans;

  if (!plans) {
    return res.status(400).json({
      error: {
        message: "plans field is required",
      },
      status: 400,
    });
  }

  try {
    const response = await create(plans);
    return res.status(201).json({
      data: response,
      message: "Standup created successfully",
      status: 201,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllStandups = async (req: Request, res: Response) => {
  const response = await getAll();

  res.status(200).json({
    data: response,
    message: "All standups fetched successfully",
    status: 200,
  });
};
