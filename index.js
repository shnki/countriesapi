const express = require("express");
const app = express();
const product = require("./api/product.js");
const countries = require("./api/countries.js");

app.use(express.json({ extended: false }));

app.use("/api/countries", countries);
app.use(express.static("public"));

const PORT = process.env.port || 8080;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
