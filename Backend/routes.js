const express = require("express");
const router = express.Router();
const Localevent = require("./schema.js");
router.get("/", async (req, res) => {
  try {
    const events = await Localevent.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
