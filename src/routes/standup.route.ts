import express from "express";
import {
  createStandup,
  deleteStandup,
  getAllStandups,
  getStandup,
} from "../controllers/standup.controller";

const router = express.Router();

router.post("/", createStandup);

router.get("/", getAllStandups);

router.get("/:id", getStandup);

router.delete("/:id", deleteStandup);

export default router;
