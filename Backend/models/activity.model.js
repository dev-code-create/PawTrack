import mongoose from "mongoose";

const activitySchema = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    activityType: {
      type: String,
      enum: ["Walk", "Play", "Training", "Grooming"],
    },
    duration: {
      type: Number,
      required: true,
    }, // In minutes
    notes: String,
  },
  { timestamps: true }
);

const Activity = mongoose.model("Activity", activitySchema);

export default Activity;
