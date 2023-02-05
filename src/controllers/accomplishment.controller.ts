import { PrismaClient, Prisma } from "@prisma/client";
import { Request, Response } from "express";
import {
  create,
  getAll,
  getAccomplishmentById,
  update,
} from "../services/accomplishment.service";

export const createAccomplishment = async (req: Request, res: Response) => {
  const accomplishment: Prisma.AccomplishmentCreateInput = req.body;

  try {
    const response = await create(accomplishment);
    return res.status(201).json({
      data: response,
      message: "Accomplishment created successfully",
      status: 201,
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return res.status(400).json({
        error: {
          message: error.message,
          meta: error.meta,
        },
        status: 400,
      });
    } else if (error instanceof Prisma.PrismaClientValidationError) {
      return res.status(400).json({
        error: {
          message: error.message,
        },
        status: 400,
      });
    } else {
      console.log(error);
    }
    res.status(500).json({ error: error });
  }
};

export const getAccomplishments = async (req: Request, res: Response) => {
  const response = await getAll();

  return res.status(200).json({
    data: response,
    message: "Accomplishments fetched successfully",
    status: 200,
  });
};

export const getAccomplishment = async (req: Request, res: Response) => {
  const id: string = req.params.id;

  try {
    const response = await getAccomplishmentById(id);

    return res.status(200).json({
      data: response,
      message: "Accomplishment fetched successfully",
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

export const updateAccomplishment = async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const updatedData: Prisma.AccomplishmentUpdateInput = req.body;

  try {
    await getAccomplishmentById(id);

    const response = await update(id, updatedData);

    return res.status(200).json({
      data: response,
      message: "Accomplishment updated successfully",
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
