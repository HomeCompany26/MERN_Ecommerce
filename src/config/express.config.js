const express = require("express");
const app = express();

const router = require("../routes/router");
app.use("/api/v1", router);

// error handler
app.use((error, req, res, next) => {
  const code = error.code ?? 500;
  const message = error.message ?? "server error";
  res.status(code).json({ result: error, message: message, meta: null });
});
module.exports = app;
