import express from "express";
import { createBlocker, getBlockers } from "../controllers/blocker.controller";

const router = express.Router();

router.post("/", createBlocker);

router.get("/", getBlockers);

export default router;
