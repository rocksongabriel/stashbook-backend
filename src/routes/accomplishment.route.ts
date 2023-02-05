import express from "express";
import {
  createAccomplishment,
  getAccomplishments,
} from "../controllers/accomplishment.controller";

const router = express.Router();

router.post("/", createAccomplishment);

router.get("/", getAccomplishments);

export default router;
