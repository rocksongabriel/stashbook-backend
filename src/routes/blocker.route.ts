import express from "express";
import { createBlocker } from "../controllers/blocker.controller";

const router = express.Router();

router.post("/", createBlocker);

export default router;
