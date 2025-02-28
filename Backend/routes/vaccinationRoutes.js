import express from "express";
import { createVaccination } from "../controllers/vaccinationController";

const router = express.Router();

router.post("/create-vaccine", createVaccination);

router.get("/:petId", getVaccinationsByPet);

export default router;
