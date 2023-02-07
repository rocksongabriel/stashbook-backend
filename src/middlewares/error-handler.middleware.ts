import { Prisma } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

const BAD_REQUEST = StatusCodes.BAD_REQUEST;

function handleError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  let customError = err;

  if (
    err instanceof Prisma.PrismaClientKnownRequestError &&
    err.code == "P2025"
  ) {
    return res.status(StatusCodes.NOT_FOUND).json({
      message: err.message,
      status: StatusCodes.NOT_FOUND,
    });
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    return res.status(BAD_REQUEST).json({
      message: err.message,
      additionalInfo: err.meta,
      status: BAD_REQUEST,
    });
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    return res.status(BAD_REQUEST).json({
      message: err.message,
      status: BAD_REQUEST,
    });
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    return res.status(BAD_REQUEST).json({
      message: err.message,
      status: BAD_REQUEST,
    });
  }
  next(err);
}

export default handleError;
