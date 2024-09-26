const express = require("express");
const router = express.Router();
const Event = require("../Schema/MainSchema");

const handleError = (res, error, message) => {
  console.error(error);
  res.status(500).json({ message, error: error.message });
};

// Get all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.json(events);
  } catch (error) {
    handleError(res, error, "Error fetching all events");
  }
});

// Get events with pagination and search
router.get("/events", async (req, res) => {
  const { category, date, location, popularity } = req.query;

  const filters = {};

  if (category) {
    filters.category = category;
  }

  if (date) {
    filters.date = { $gte: new Date(date) }; // Adjust as necessary for your logic
  }

  if (location) {
    filters.location = { $regex: location, $options: "i" }; // Case-insensitive search
  }

  if (popularity) {
    filters.popularity = { $gte: Number(popularity) }; // Ensure popularity is a number
  }

  try {
    const events = await Event.find(filters).limit(100); // Adjust the limit as necessary
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error);
    res.status(500).send("Server error");
  }
});

router.get("/events/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json(event);
  } catch (error) {
    handleError(res, error, "Error fetching event");
  }
});

router.post("/events", async (req, res) => {
  try {
    const eventData = { ...req.body, date: new Date(req.body.date) };
    const event = new Event(eventData);
    await event.validate();
    const savedEvent = await event.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation Error", errors: error.errors });
    }
    handleError(res, error, "Error creating event");
  }
});

router.put("/events/:id", async (req, res) => {
  try {
    const eventData = {
      ...req.body,
      date: new Date(req.body.date),
      updatedAt: Date.now(),
    };
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      eventData,
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json(updatedEvent);
  } catch (error) {
    if (error.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Validation Error", errors: error.errors });
    }
    handleError(res, error, "Error updating event");
  }
});

router.delete("/events/:id", async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) {
      return res.status(404).json({ message: "Event not found" });
    }
    res.json({ message: "Event deleted successfully", deletedEvent });
  } catch (error) {
    handleError(res, error, "Error deleting event");
  }
});

module.exports = router;
