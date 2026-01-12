class AuthController {
  register = (req, res) => {
    res.json({ result: "register user", meta: null });
  };

  verifyActivationToken = (req, res) => {
    res.json({ result: "token verification", meta: null });
  };

  activateUser = (req, res) => {
    res.json({ result: "activate user", meta: null });
  };

  loginUser = (req, res) => {
    res.json({ result: "login", meta: null });
  };

  getLoggedInUser = (req, res) => {
    res.json({ result: "I am me", meta: null });
  };

  sendEmailForForgetPassword = (req, res) => {
    res.json({ result: "forget password", meta: null });
  };

  verifyForgetPasswordToken = (req, res) => {
    res.json({ result: "token verification", meta: null });
  };

  updatePassword = (req, res) => {
    res.json({ result: "reset password", meta: null });
  };
}
const authCtrl = new AuthController();
module.exports = authCtrl;
