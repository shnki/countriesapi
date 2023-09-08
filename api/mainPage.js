const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "./../views/mainpage/mainPage.html"));
});

module.exports = router;
