import express from "express";
import {
  completeAppointment,
  createAppointment,
} from "../controllers/appointmentController.js";

const router = express.Router();

router.post("/create-appointment", createAppointment);

router.put("/:id/complete", completeAppointment);

export default router;
