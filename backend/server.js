// Load environment variables
import dotenv from "dotenv";
dotenv.config();

// Core imports
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

// Routes
import reservationRoutes from "./routes/reservationRoutes.js";

const app = express();

/* -------------------- MIDDLEWARE -------------------- */
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- ROUTES -------------------- */
app.get("/", (req, res) => {
  res.send("Restaurant Backend API is running");
});

app.use("/api/reservations", reservationRoutes);

/* -------------------- DATABASE & SERVER -------------------- */
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Atlas connected successfully");

    app.listen(PORT, () => {
      console.log(`🚀 SERVER HAS STARTED AT PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
  });
