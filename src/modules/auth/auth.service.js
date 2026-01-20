const userModel = require("../../modules/user/user.model");
const EmailService = require("../common/mail/email.service");
const { randomString } = require("../../config/helper.config");

class AuthService {
  //

  register = async (payload) => {
    try {
      payload.activationToken = randomString();
      payload.status = "notactivated";
      let link = "http://localhost:3000/activate/" + [payload.activationToken];
      let message = `Dear ${payload.name}, <br/>
              <p>Your account has been sucessfully registered. please click the link below to activeate your account<p/>
              <a herf="${link}">${link}</a>
              <br/>
              Regards,<br/>
              System admin<br/>
              <small>Please do not reply this email.</small>`;

      const emailSvc = new EmailService();
      await emailSvc.sendEmail(payload.email, "Activate your account", message);
      const user = new userModel(payload);
      await user.save();
    } catch (error) {
      throw error;
    }
  };

  getUserByActivationToken = async (token) => {
    console.log(token);

    try {
      let data = await userModel.findOne({
        activationToken: token,
      });
      if (!data) {
        throw { code: 400, message: "invalid token" };
      }
      return data;
    } catch (error) {
      throw error;
    }
  };

  updateUserById = (id, data) => {
    try {
      // const response = userModel.findByIdAndUpdate(id, { $set: data });
      // const response = userModel.findOneAndUpdate({ _id: id }, { $set: data });
      const response = userModel.updateOne({ _id: id }, { $set: data });
      return response;
    } catch (error) {
      throw error;
    }
  };
}

const authSvc = new AuthService();
module.exports = authSvc;
