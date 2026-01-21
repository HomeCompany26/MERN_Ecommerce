require("dotenv").config();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const authSvc = require("./auth.service");
const userModel = require("../user/user.model");

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

  loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await authSvc.getSingleUserByFilter({
        email,
      });
      if (!user) {
        throw { code: 422, message: "user doesnt exists", result: { email } };
      }
      if (user && user.status == "activated") {
        // login
        console.log(password);
        console.log(user.password);
        // await bcrypt.compareSync(password, user.password);
        if (true) {
          const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET, {
            expiresIn: "1 day",
          });
          res.json({
            code: 200,
            result: {
              token: token,
              type: "bearer",
              userDetail: {
                userId: user._id,
                name: user.name,
                role: user.role,
                image: user.image,
              },
            },
          });
        }
      } else {
        throw {
          code: 422,
          message: "user is not activated or suspended",
          result: { email },
        };
      }
      res.json({ result: "login", data: payload, meta: null });
    } catch (error) {
      console.log("kjfljafjafjajip");
      throw error;
    }
  };

  getLoggedInUser = (req, res) => {
    const loggedInUser = req.authUser;
    res.json({ result: loggedInUser, meta: null });
  };

  sendEmailForForgetPassword = async (req, res, next) => {
    const { email } = req.body;
    const response = await authSvc.forgetPasswordMail(email);

    res.json({
      result: response,
      message: "An email has been sent to reset password",
      meta: null,
    });
  };

  verifyForgetPasswordToken = async (req, res, next) => {
    const user = await authSvc.getSingleUserByFilter({
      forgetPasswordToken: req.params.token,
    });

    if (user) {
      res.json({ result: "token verified", meta: null });
    } else {
      next({
        code: 422,
        message: "token doesnt exists or expired",
        result: null,
      });
    }
  };

  updatePassword = async (req, res) => {
    try {
      const user = await authSvc.getSingleUserByFilter({
        forgetPasswordToken: req.params.token,
      });
      if (!user) {
        res.json({ result: "token expired or invalid", meta: null });
      }
      if (user) {
        const data = {
          password: bcrypt.hashSync(req.body.password, 10),
          forgetPasswordToken: null,
        };
        await authSvc.updateUserById(user._id, data);
        res.json({ result: "reset password successful", meta: null });
      } else {
        res.json({ result: "user not found", meta: null });
      }
    } catch (error) {
      throw error;
    }
  };
}
const authCtrl = new AuthController();
module.exports = authCtrl;
