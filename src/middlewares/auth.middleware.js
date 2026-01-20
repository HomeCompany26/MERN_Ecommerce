var jwt = require("jsonwebtoken");
const authSvc = require("../modules/auth/auth.service");

const authCheck = (req, res, next) => {
  try {
    let token;
    if (req.headers["authorization"]) {
      token = req.headers["authorization"];
    } else {
      next({ code: 401, message: "token not set" });
    }
    token = token.split(" ").pop();
    if (!token) {
      next({ code: 401, message: "empty token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userDetail = authSvc.getSingleUserByFilter({ _id: decoded.sub });

    if (!userDetail) {
      next({ code: 401, message: "user doesnt exist anymore" });
    } else {
      req.authUser = userDetail;
      next();
    }
  } catch (error) {}
};
module.exports = authCheck;
