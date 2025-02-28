import PetSitter from "../models/petSitter.model.js";

export const createPetSitter = async (req, res) => {
  try {
    const { name, contact, location, availablility } = req.body;
    const sitter = new PetSitter({
      name,
      contact,
      location,
      availablility,
    });
    res.status(201).json(sitter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//add a review to a pet sitter
export const addReview = async (req, res) => {
  try {
    const { rating, review } = req.body;
    const sitter = await PetSitter.findById(req.params.sitterId);
    sitter.ratings.push({ user: req.user.userId, rating, review });
    await sitter.save();
    res.status(200).json(sitter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
