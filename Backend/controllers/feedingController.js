import feedSchedule from "../models/feedingSchedule.model";

export const createFeedingSchedule = async (req, res) => {
  try {
    const { petId, time, foodType, portion } = req.body;
    const schedule = new feedSchedule({
      pet: petId,
      time,
      foodType,
      portion,
    });
    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//get feedSchedule for a pet
export const getFeedingSchedule = async (req, res) => {
  try {
    const schedule = await feedSchedule.find({ pet: req.params.petId });
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
