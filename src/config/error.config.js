const router = require("express").Router();

router.use((req, res, next) => {
  next({ code: 404, message: "route not found" });
});
router.use((error, req, res, next) => {
  const code = error.code ?? 500;
  const message = error.message ?? "server error";
  res.status(code).json({ result: error, message: message, meta: null });
});

module.exports = router;
