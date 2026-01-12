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
app.use((error, req, res, next) => {
  const code = error.code ?? 500;
  const message = error.message ?? "server error";
  const result = error.result ?? null;
  res.status(code).json({ result: result, message: message, meta: null });
});

module.exports = app;
