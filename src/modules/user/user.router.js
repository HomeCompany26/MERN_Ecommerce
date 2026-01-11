const express = require("express");
const router = express();

router.post("/", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "user created successfully ",
    message: "user created successfully",
    meta: null,
  });
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "user detail of id:" + id,
    message: "user detail",
    meta: null,
  });
});
router.get("/", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "get all users details",
    message: "users detail",
    meta: null,
  });
});
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "delete user of id:" + id,
    message: "delete user ",
    meta: null,
  });
});
router.patch("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "edit user of id:" + id,
    message: "edit user ",
    meta: null,
  });
});

module.exports = router;
