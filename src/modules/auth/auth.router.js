const router = require("express").Router();

router.post("/register", (req, res) => {
  res.json({ result: "register user", meta: null });
});
router.post("/login", (req, res) => {
  res.json({ result: "login", meta: null });
});
router.post("/forget-password", (req, res) => {
  res.json({ result: "forget password", meta: null });
});
router.post("/reset-password", (req, res) => {
  res.json({ result: "reset password", meta: null });
});
router.get("/logout", (req, res) => {
  res.json({ result: "logout success", meta: null });
});

module.exports = router;
