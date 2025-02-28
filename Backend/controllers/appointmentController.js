import Appointment from "../models/appointment.model";

export const createAppointment = async (req, res) => {
  try {
    const { petId, date, type, vetName } = req.body;
    const appointment = new Appointment({
      pet: petId,
      date,
      type,
      vetName,
    });
    await appointment.save();
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//mark appointment as completed
export const completeAppointment = async (req, res) => {
  try {
    const updateAppointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      {
        isCompleted: true,
      },
      { new: true }
    );
    res.status(200).json(updateAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
