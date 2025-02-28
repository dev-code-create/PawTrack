import express from "express";
import {
  createFeedingSchedule,
  getFeedingSchedule,
} from "../controllers/feedingController.js";

const router = express.Router();

router.post("/create-feeding", createFeedingSchedule);

router.get("/:petId", getFeedingSchedule);

export default router;
