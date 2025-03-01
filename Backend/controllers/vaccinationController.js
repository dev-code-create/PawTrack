import Vaccination from "../models/vaccination.model.js";
import { sendVaccinationReminder } from "../utils/notifications.js";
// create a vaccination record
export const createVaccination = async (req, res) => {
  try {
    const { petId, vaccineType, date, nextDueDate } = req.body;
    const vaccination = new Vaccination({
      pet: petId,
      vaccineType,
      date,
      nextDueDate,
    });
    await vaccination.save();

    //send reminder email vaccine
    const pet = await vaccination.populate("pet");
    sendVaccinationReminder(
      pet.owner.email,
      pet.name,
      vaccineType,
      nextDueDate
    );
    res.status(400).json(vaccination);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// get all vaccinations for a pet
export const getVaccinationByPet = async (req, res) => {
  try {
    const vaccinations = await Vaccination.find({ pet: req.params.petId });
    res.status(200).json(vaccinations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
