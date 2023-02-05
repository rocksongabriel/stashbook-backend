import express from "express";
import {
  createAccomplishment,
  getAccomplishments,
  getAccomplishment,
} from "../controllers/accomplishment.controller";

const router = express.Router();

router.post("/", createAccomplishment);

router.get("/", getAccomplishments);

router.get("/:id", getAccomplishment);

export default router;
