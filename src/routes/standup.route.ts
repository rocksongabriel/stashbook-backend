import express from "express";
import { createStandup } from "../controllers/standup.controller";

const router = express.Router();

router.post("/", createStandup);

export default router;
