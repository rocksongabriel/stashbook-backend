import express from "express";
import {
  createBlocker,
  getBlocker,
  getBlockers,
  updateBlocker,
} from "../controllers/blocker.controller";

const router = express.Router();

router.post("/", createBlocker);

router.get("/", getBlockers);

router.get("/:id", getBlocker);

router.put("/:id", updateBlocker);

export default router;