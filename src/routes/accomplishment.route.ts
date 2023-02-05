import express from "express";
import {
  createAccomplishment,
  getAccomplishments,
  getAccomplishment,
  updateAccomplishment,
} from "../controllers/accomplishment.controller";

const router = express.Router();

router.post("/", createAccomplishment);

router.get("/", getAccomplishments);

router.get("/:id", getAccomplishment);

router.put("/:id", updateAccomplishment);

export default router;
