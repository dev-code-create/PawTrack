import mongoose from "mongoose";

const feedingSchedule = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    foodtype: {
      type: String,
      required: true,
    },
    portion: {
      type: String,
      required: true,
    },
    notes: String,
  },
  { timestamps: true }
);

const feedSchedule = mongoose.model("FeedSchedule", feedingSchedule);
export default feedSchedule;
