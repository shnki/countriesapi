const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/:country", (req, res) => {
  res.sendFile(
    path.join(__dirname + `./../public/flags/${req.params.country}.png`)
  );
});

module.exports = router;
