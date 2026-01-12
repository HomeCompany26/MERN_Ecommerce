const express = require("express");
const app = express();

const router = require("../routes/router");
const errorRoutes = require("./error.config");

app.use("/api/v1", router);
app.use(errorRoutes);

// error handler

module.exports = app;
