import Vaccination from "../models/vaccination.model";
import { sendVaccinationReminder } from "./notifications";

export const scheduleVaccinationReminders = () => {
  nodeSchedule.scheduleJob(" 0 0 * * *", async () => {
    try {
      const today = new Date();
      const oneWeekLater = new Date(today.setDate(today.getDate() + 7));

      const upcomingVaccinations = await Vaccination.find({
        nextDueDate: { $gte: today, $lte: oneWeekLater },
      }).populate("pet");

      //send reminders for each vaccination
      upcomingVaccinations.forEach((vaccination) => {
        const pet = vaccination.pet;
        sendVaccinationReminder(
          pet.owner.email,
          pet.name,
          vaccination.vaccineTyppe,
          vaccination.nextDueDate
        );
      });
      console.log(
        `scheduled Reminders sent for ${upcomingVaccinations.length} vaccinations`
      );
    } catch (error) {
      console.error("Error in reminders", error.message);
    }
  });
};
