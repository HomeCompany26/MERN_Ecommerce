const Joi = require("joi");

class AuthController {
  register = async (req, res) => {
    try {
      const data = req.body;
      const registerSchema = Joi.object({
        name: Joi.string().alphanum().min(3).max(30).required(),
        email: Joi.string().email().required(),
      });

      const response = await registerSchema.validateAsync(data);
      res.json({ result: "register user", data: data, meta: null });
    } catch (error) {
      res.json({ result: error, message: error.message, meta: null });
    }
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
