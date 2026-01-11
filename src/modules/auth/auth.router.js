const express = require("express");
const router = express();

router.post("/login", (req, res) => {
  res.json({ result: "login", meta: null });
});
module.exports = router;
