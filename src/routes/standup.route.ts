import express from "express";
import { createStandup, getAllStandups } from "../controllers/standup.controller";

const router = express.Router();

router.post("/", createStandup);

router.get("/", getAllStandups)

export default router;
