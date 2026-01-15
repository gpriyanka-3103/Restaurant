import express from "express";
import Reservation from "../models/reservation.js";

const router = express.Router();

/* ---------------- GET ALL RESERVATIONS ---------------- */
router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch reservations",
      error: error.message,
    });
  }
});

/* ---------------- CREATE A RESERVATION ---------------- */
router.post("/", async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();

    res.status(201).json({
      message: "Reservation created successfully",
      reservation,
    });
  } catch (error) {
    res.status(400).json({
      message: "Failed to create reservation",
      error: error.message,
    });
  }
});

export default router;
