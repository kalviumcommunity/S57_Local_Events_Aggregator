const { default: mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Location: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
  StartTime: {
    type: String,
    required: true,
  },
  EndTime: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: false,
  },
  Category: {
    type: String,
    enum: ["concert", "festival", "market", "community gathering", "other"],
    required: true,
  },
  Organizer: {
    type: String,
    required: true,
  },
  ContactEmail: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
