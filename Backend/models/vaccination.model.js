import mongoose from "mongoose";

const vaccinationsSchema = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    vaccineTyppe: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    nextDueDate: Date,
    notes: String,
  },
  { timeStamp: true }
);

const Vaccination = mongoose.model("Vaccination", vaccinationsSchema);
export default Vaccination;
