import express from "express";
import {
  getActivityHistory,
  logActivity,
} from "../controllers/activityController.js";

const router = express.Router();

router.post("/", logActivity);

router.get("/:petId", getActivityHistory);

export default router;
