const express = require("express");
const router = express.Router();
const countryList = require("./data.js");
router.get("/:country", async (req, res) => {
  const countryData = countryList.filter(
    (obj) => obj.code == req.params.country.toUpperCase()
  );
  try {
    res.json({
      status: 200,
      message: "Get country",
      data: {
        ...countryData[0],
        flag:
          req.protocol +
          "://" +
          req.get("host") +
          "/flags/" +
          req.params.country.toLowerCase() +
          ".png",
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
