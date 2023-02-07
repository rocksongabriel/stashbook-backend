import express from "express";
import {
  createBlocker,
  getBlocker,
  getBlockers,
} from "../controllers/blocker.controller";

const router = express.Router();

router.post("/", createBlocker);

router.get("/", getBlockers);

router.get("/:id", getBlocker);

export default router;
