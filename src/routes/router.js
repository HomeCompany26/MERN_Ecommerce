const router = require("express").Router();

const authRouter = require("../modules/auth/auth.router");
const userRouter = require("../modules/user/user.router");
const brandRouter = require("../modules/brand/brand.router");
const bannerRouter = require("../modules/banner/banner.router");

router.use((req, res, next) => {
  let success = true;
  let user = { name: "rabin", role: "admin", address: "thimi" };
  if (success) {
    req.authUser = user;
    next();
  } else {
    res.status(401).json({ result: "Please login first", meta: null });
  }
});

router.use("/auth", authRouter);
router.use("/user", userRouter);
router.use("/brand", brandRouter);
router.use("/banner", bannerRouter);

// router.use("/", (req, res) => {
//   console.log("route not found");
//   res
//     .status(404)
//     .json({ name: "route not fount", address: "null", meta: null });
// });

module.exports = router;
