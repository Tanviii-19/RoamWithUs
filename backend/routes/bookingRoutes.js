const express = require("express");
const router = express.Router();
const Booking = require("../models/Bookings");

// Create a new booking
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body); // takes data from frontend
    await booking.save(); // saves in MongoDB

    res.status(201).json({
      message: "Booking successful",
      booking,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get all bookings (admin view)
router.get("/", async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ createdAt: -1 });
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get bookings by user email (MyBookings)
router.get("/user/:email", async (req, res) => {
  try {
    const bookings = await Booking.find({
      email: req.params.email,
    }).sort({ createdAt: -1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete booking (admin or user)
router.delete("/:id", async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;

