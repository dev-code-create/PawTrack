import express from "express";
import {
  createNewPet,
  deletePet,
  getAllPets,
  getPetById,
  updatePet,
} from "../controllers/petController.js";

const router = express.Router();

router.get("/get-pet", getAllPets);

router.post("/create-pet", createNewPet);

router.get("/:id", getPetById);

router.put("/:id", updatePet);

router.delete("/:id", deletePet);

export default router;
