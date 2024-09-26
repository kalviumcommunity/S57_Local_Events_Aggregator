const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Music", "Art", "Food", "Sports", "Technology", "Other"],
  },
  organizer: {
    type: String,
    required: true,
  },
  ticketPrice: {
    type: Number,
    default: 0,
  },
  capacity: {
    type: Number,
    required: true,
  },
  attendees: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  imageUrl: {
    type: String,
    required: true,
  },
  websiteLink: {
    type: String,
    required: true,
  },
  tags: [
    {
      type: String,
    },
  ],
  isFeatured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Virtual for formatted date
eventSchema.virtual("formattedDate").get(function () {
  return this.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
});

// Virtual for month
eventSchema.virtual("month").get(function () {
  return this.date.toLocaleDateString("en-US", { month: "long" });
});

// Index for faster queries
eventSchema.index({ title: "text", description: "text", tags: "text" });

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
