import express from "express";
import {
  addReview,
  createPetSitter,
} from "../controllers/petsitterController.js";

const router = express.Router();

router.post("/create-petsitter", createPetSitter);

router.post("/:sitterId/reviews", addReview);

export default router;
