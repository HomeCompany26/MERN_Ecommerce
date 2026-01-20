const userModel = require("../../modules/user/user.model");
const EmailService = require("../common/mail/email.service");
const { randomString } = require("../../config/helper.config");

class AuthService {
  //

  register = async (payload) => {
    const user = new userModel(payload);
    console.log(user);
    await user.save();
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
