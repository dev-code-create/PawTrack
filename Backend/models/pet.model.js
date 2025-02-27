import mongoose from "mongoose";

const petSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    species: {
      type: String,
      enum: ["Dog", "Cat", "Bird", "Rabbit", "Other"],
      required: true,
    },
    breed: String,
    age: Number,
    weight: Number,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    vaccinations: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Vaccination",
      },
    ],
    feedingSchedule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FeedingSchedule",
      },
    ],
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment",
      },
    ],
    activities: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Activity",
      },
    ],
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
