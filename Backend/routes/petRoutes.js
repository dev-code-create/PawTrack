import express from "express";
import {
  deletePet,
  getAllPets,
  getPetById,
  updatePet,
} from "../controllers/petController";
import { createPetSitter } from "../controllers/petsitterController";

const router = express.Router();

// GET /api/pets - Get all pets
router.get("/get-pet", getAllPets);

// POST /api/pets - Create a new pet
router.post("/create-pet", createPetSitter);

// GET /api/pets/:id - Get pet by ID
router.get("/:id", getPetById);

// PUT /api/pets/:id - Update pet by ID
router.put("/:id", updatePet);

// DELETE /api/pets/:id - Delete pet by ID
router.delete("/:id", deletePet);

export default router;
