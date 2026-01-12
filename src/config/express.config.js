const express = require("express");
const app = express();

const router = require("../routes/router");
const errorRoutes = require("./error.config");

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", router);
app.use(errorRoutes);

// error handler

module.exports = app;
