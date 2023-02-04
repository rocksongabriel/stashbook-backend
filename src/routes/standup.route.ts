import express from "express";
import {
  createStandup,
  getAllStandups,
  getStandup,
} from "../controllers/standup.controller";

const router = express.Router();

router.post("/", createStandup);

router.get("/", getAllStandups);

router.get("/:id", getStandup);

export default router;
