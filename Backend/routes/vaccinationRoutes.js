import express from "express";
import {
  createVaccination,
  getVaccinationByPet,
} from "../controllers/vaccinationController.js";

const router = express.Router();

router.post("/create-vaccine", createVaccination);

router.get("/:petId", getVaccinationByPet);

export default router;
