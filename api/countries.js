const express = require("express");
const router = express.Router();
const countryList = require("./data.js");
router.use(express.static("public"));
router.get("/:country", async (req, res) => {
  if (req.params.country === "all") {
    try {
      res.status(200).json(countryList);
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server error");
    }
  } else {
    const countryData = countryList.filter(
      (obj) => obj.code == req.params.country.toUpperCase()
    );
    try {
      console.log(countryData);
      if (countryData.length) {
        res.status(200).json({
          status: 200,
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
        res.status(404).json({
          message: "not a valid code",
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).send("Server error");
    }
  }
});

module.exports = router;
