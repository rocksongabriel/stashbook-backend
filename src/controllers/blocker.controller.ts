import { Prisma } from "@prisma/client";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { NextFunction, Request, Response } from "express";
import { create, all } from "../services/blocker.service";

export const createBlocker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const blocker: Prisma.BlockerCreateInput = req.body;

  try {
    const response = await create(blocker);

    return res.status(StatusCodes.CREATED).json({
      data: response,
      message: ReasonPhrases.CREATED,
      status: StatusCodes.CREATED,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlockers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const response = await all();

    return res.status(StatusCodes.OK).json({
      data: response,
      message: ReasonPhrases.OK,
      status: StatusCodes.OK,
    });
  } catch (error) {
    next(error);
  }
};
