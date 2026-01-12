const authCheck = (req, res, next) => {
  if (true) {
    console.log("in authcheck middleware");
    next();
  } else {
    res.json({ result: "auth check" });
  }
};
module.exports = authCheck;
