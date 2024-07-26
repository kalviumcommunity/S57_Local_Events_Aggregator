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
    const { Title, Description, Date, Month, Websitelink, ImageUrl } = req.body;
    const event = await Localevent.create({
      Title,
      Description,
      Date,
      Month,
      Websitelink,
      ImageUrl,
    });
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});
router.put("/events/update/:id", async (req, res) => {
  try {
    const event = await Localevent.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});
router.delete("/events/delete/:id", async (req, res) => {
  try {
    const event = await Localevent.findByIdAndDelete(req.params.id, req.body, {
      new: true,
    });
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
