import Pet from "../models/pet.model";

// Get all the pets for a user
export const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find({ owner: req.user.userId }).populate(
      "vaccinations feedingSchedule appointments"
    );
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new pet for a user
export const createNewPet = async (req, res) => {
  try {
    const { name, species, breed, age, weight } = req.body;
    const newPet = new Pet({
      name,
      species,
      breed,
      age,
      weight,
      owner: req.user.userId,
    });
    await newPet.save();
    res.status(201).json(newPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get pet by ID
export const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate(
      "vaccinations feedingSchedule appointments"
    );
    if (!pet) return res.status(404).json({ message: "No pet found" });
    res.status(200).json(pet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a pet by ID
export const updatePet = async (req, res) => {
  try {
    const { name, species, breed, age, weight } = req.body;
    const updatePet = await Pet.findByIdAndUpdate(
      req.params.id,
      { name, species, breed, age, weight },
      { new: true }
    );
    res.status(200).json(updatePet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete pet
export const deletePet = async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Pet deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
