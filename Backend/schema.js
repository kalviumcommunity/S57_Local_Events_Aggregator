const { default: mongoose } = require("mongoose");
const { type } = require("os");

const eventSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
  },
  Date: {
    type: Number,
    required: true,
  },
  Month: {
    type: String,
    required: true,
  },
  Websitelink: {
    type: String,
    required: true,
  },
  ImageUrl: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
