const router = require("express").Router();
const authCheck = require("../../middlewares/auth.middleware");
const authCtrl = require("./auth.controller");
const {
  validator,
  paramsValidator,
} = require("../../middlewares/validator.middleware");
const {
  registerSchema,
  activationToken,
  passwordSchema,
} = require("./auth.request");
const uploader = require("../../middlewares/uploader.middleware");

// register user
router.post(
  "/register",
  uploader.array("image"),
  validator(registerSchema),
  authCtrl.register
);
router.get(
  "/verify/:token",
  paramsValidator(activationToken),
  authCtrl.verifyActivationToken
);
router.post(
  "/activation/:token",
  paramsValidator(activationToken),
  validator(passwordSchema),
  authCtrl.activateUser
);

// login process
router.post("/login", authCtrl.loginUser);
router.get("/logout", authCheck, (req, res) => {
  res.json({ result: "logout success", meta: null });
});
router.get("/me", authCheck, authCtrl.getLoggedInUser);

router.post("/forget-password", authCtrl.sendEmailForForgetPassword);
router.get(
  "/verify-password-token/:token",
  paramsValidator(activationToken),
  authCtrl.verifyForgetPasswordToken
);
router.post(
  "/set-password/:token",
  paramsValidator(activationToken),
  authCtrl.updatePassword
);

module.exports = router;
