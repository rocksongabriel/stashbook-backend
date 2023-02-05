import express from "express";
import { createAccomplishment } from "../controllers/accomplishment.controller";

const router = express.Router();

router.post("/", createAccomplishment);

export default router;
