const router = require("express").Router();
const authCheck = require("../../middlewares/auth.middleware");
const authCtrl = require("./auth.controller");
const validator = require("../../middlewares/validator.middleware");
const { registerSchema } = require("./auth.request");

// register user
router.post("/register", validator(registerSchema), authCtrl.register);
router.get("/verify/:token", authCtrl.verifyActivationToken);
router.post("/activation/:token", authCtrl.activateUser);

// login process
router.post("/login", authCtrl.loginUser);
router.get("/logout", authCheck, (req, res) => {
  res.json({ result: "logout success", meta: null });
});
router.get("/me", authCheck, authCtrl.getLoggedInUser);

router.post("/forget-password", authCtrl.sendEmailForForgetPassword);
router.get("/verify-password-token/:token", authCtrl.verifyForgetPasswordToken);
router.post("/set-password/:token", authCtrl.updatePassword);

module.exports = router;
