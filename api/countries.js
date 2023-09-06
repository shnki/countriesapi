const express = require("express");
const router = express.Router();
const countryList = require("./data.js");
router.get("/:country", async (req, res) => {
  const countryData = countryList.filter(
    (obj) => obj.code == req.params.country.toUpperCase()
  );
  try {
    console.log(countryData);
    if (countryData.length) {
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
    } else {
      res.json({
        status: 404,
        message: "not a valid code",
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server error");
  }
});

module.exports = router;
