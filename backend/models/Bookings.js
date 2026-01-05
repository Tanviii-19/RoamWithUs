const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
    },

    destination: {
      type: String,
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

     mobile: {
      type: String,
      required: true,
    },

    travelType: {
      type: String,
      required: true,
      enum: ["Solo", "Family", "Couple"],
    },

    people: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
