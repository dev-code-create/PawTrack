import Activity from "../models/activity.model.js";

export const logActivity = async (req, res) => {
  try {
    const { petId, activityType, duration, notes } = req.body;
    const activity = new Activity({
      pet: petId,
      activityType,
      duration,
      notes,
    });
    await activity.save();
    res.status(201).json(activity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get Activity for a pet
export const getActivityHistory = async (req, res) => {
  try {
    const activities = await Activity.find({ pet: req.params.petId });
    res.status(200).json(activities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
