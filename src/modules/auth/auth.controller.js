const bcrypt = require("bcryptjs");
const authSvc = require("./auth.service");

class AuthController {
  register = async (req, res) => {
    const payload = req.body;
    if (req.files) {
      const images = req.files.map((img) => img.filename);
      payload.images = images;
      // console.log(req.files);
    }
    try {
      await authSvc.register(payload);

      res.json({ result: "register user", data: payload, meta: null });
    } catch (error) {
      res.json({ result: error, message: error.message, meta: null });
    }
  };

  verifyActivationToken = async (req, res) => {
    let token = req.params.token;
    const data = await authSvc.getUserByActivationToken(token);
    res.json({ result: data, message: "token verified", meta: null });
  };

  activateUser = async (req, res) => {
    const token = req.params.token;
    const user = await authSvc.getUserByActivationToken(token);

    const data = {
      password: bcrypt.hashSync(req.body.password, 10),
      activationToken: null,
      status: "activated",
    };
    const response = await authSvc.updateUserById(user._id, data);
    res.json({ result: response, message: "activate userrrr", meta: null });
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
