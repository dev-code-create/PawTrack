import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import petRoutes from "./routes/petRoutes.js";
import vaccinationRoutes from "./routes/vaccinationRoutes.js";
import feedingRoutes from "./routes/feedingRoute.js";
import appointmentRoutes from "./routes/appintmentRoutes.js";
import petSitterRoutes from "./routes/petsitterRoutes.js";
import activityRoutes from "./routes/activityRoutes.js";
import connectDB from "./config/db.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/pets", petRoutes);
app.use("/api/vaccinations", vaccinationRoutes);
app.use("/api/feedings", feedingRoutes);
app.use("/api/appointments", appointmentRoutes);
app.use("/api/pet-sitters", petSitterRoutes);
app.use("/api/activities", activityRoutes);

connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
