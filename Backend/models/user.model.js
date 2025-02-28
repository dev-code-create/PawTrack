import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkUserId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Pet,
    },
  ],
});

const User = mongoose.model("User", userSchema);
export default User;
