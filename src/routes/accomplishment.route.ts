import express from "express";
import {
  createAccomplishment,
  getAccomplishments,
  getAccomplishment,
  updateAccomplishment,
  deleteAccomplishment,
} from "../controllers/accomplishment.controller";

const router = express.Router();

router.post("/", createAccomplishment);

router.get("/", getAccomplishments);

router.get("/:id", getAccomplishment);

router.put("/:id", updateAccomplishment);

router.delete("/:id", deleteAccomplishment);

export default router;
