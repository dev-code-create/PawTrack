import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  vaccinations: [
    {
      date: Date,
      type: String,
    },
  ],
  feedingSchedule: [
    {
      time: String,
      foodType: String,
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Pet = mongoose.model("Pet", petSchema);

export default Pet;
