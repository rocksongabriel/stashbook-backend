import { Request, Response } from "express";
import { create, getAll } from "../services/standup.service";

export const createStandup = async (req: Request, res: Response) => {
  const response = await create();
  res.status(201).json({
    data: response,
    message: "Standup created successfully",
    status: 201,
  });
};

export const getAllStandups = async (req: Request, res: Response) => {
  const response = await getAll();

  res.status(200).json({
    data: response,
    message: "All standups fetched successfully",
    status: 200,
  });
};
