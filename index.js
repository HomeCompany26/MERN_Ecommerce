//const app = require("./src/config");
const express = require("express");
const app = express();

app.listen(3000, (req, res) => {
  res.send("server running");
});
