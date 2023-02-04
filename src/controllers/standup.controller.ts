import { Request, Response } from "express";
import { create } from "../services/standup.service";

export const createStandup = async (req: Request, res: Response) => {
  const response = await create();
  res.status(201).json({
    data: response,
    message: "Standup created successfully",
    status: 201,
  });
};
