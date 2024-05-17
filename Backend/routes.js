const express = require("express");
const router = express.Router();
const Localevent = require("./schema.js");
router.get("/events", async (req, res) => {
  try {
    const events = await Localevent.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.post("/events/postevent", async (req, res) => {
  try {
    const { Title, Description, Date, Month, Websitelink } = req.body;
    const event = await Localevent.create({
      Title,
      Description,
      Date,
      Month,
      Websitelink,
    });
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
