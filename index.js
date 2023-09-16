const express = require("express");
const app = express();
const countries = require("./api/countries.js");
const mainPage = require("./api/mainPage.js");
const flag = require("./api/flag.js");
const flagyGame = require("./api/flagyGame.js");

app.use(express.static("public"));
app.use(express.json({ extended: false }));

app.use("/api/countries/", countries);
app.use("/", mainPage);
app.use("/FlagyGame", flagyGame);
app.use("/flag", flag);
const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
