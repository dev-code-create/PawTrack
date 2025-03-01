import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "process.env.EMAIL_USER",
    pass: "process.env.EMAIL_PASS",
  },
});

export const sendVaccinationReminder = async (
  userEmail,
  petName,
  vaccineType,
  dueDate
) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: userEmail,
      subject: "Vaccination Reminder",
      text: `Hello, \n\nThis is a reminder that your pet ${petName} is due for a ${vaccineType} vaccination on ${dueDate.toDateString()}.\n\nPlease ensure your pet receives the vaccinations on time to keep them healthy!\n\nThank you,\nPet Care Manager Team`,
    };
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log("Error sending vaccination reminder", error.message);
  }
};
