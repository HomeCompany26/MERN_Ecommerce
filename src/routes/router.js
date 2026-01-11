const express = require("express");
const app = express();

const authRouter = require("../modules/auth/auth.router");
const userRouter = require("../modules/user/user.router");
const brandRouter = require("../modules/brand/brand.router");
const bannerRouter = require("../modules/banner/banner.router");

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/brand", brandRouter);
app.use("/banner", bannerRouter);

app.use("/", (req, res) => {
  console.log("route not found");
  res.json({ name: "route not fount", address: "null", meta: null });
});

module.exports = app;
