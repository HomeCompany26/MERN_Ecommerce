const { randomString } = require("../../config/helper.config");
const EmailService = require("../common/mail/email.service");

class AuthController {
  register = async (req, res) => {
    const payload = req.body;

    try {
      if (req.files) {
        const images = req.files.map((img) => img.filename);
        payload.images = images;
        // console.log(req.files);
      }

      payload.activationToken = randomString();
      payload.status = "notActivated";
      let dbStatus = true;
      if (dbStatus) {
        let link =
          "http://localhost:3000/activate/" + [payload.activationToken];
        let message = `Dear ${payload.name}, <br/>
          <p>Your account has been sucessfully registered. please click the link below to activeate your account<p/>
          <a herf="${link}">${link}</a>
          <br/>
          Regards,<br/>
          System admin<br/>
          <small>Please do not reply this email.</small>`;

        const emailSvc = new EmailService();
        console.log(payload);
        await emailSvc.sendEmail(
          payload.email,
          "Activate your account",
          message
        );
      }

      res.json({ result: "register user", data: payload, meta: null });
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
