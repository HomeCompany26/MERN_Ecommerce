const express = require("express");
const router = express();

router.post("/", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "banner created successfully ",
    message: "banner created successfully",
    meta: null,
  });
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "banner detail of id:" + id,
    message: "banner detail",
    meta: null,
  });
});
router.get("/", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "get all banners details",
    message: "banners detail",
    meta: null,
  });
});
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "delete banner of id:" + id,
    message: "delete banner ",
    meta: null,
  });
});
router.patch("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "edit banner of id:" + id,
    message: "edit banner ",
    meta: null,
  });
});

module.exports = router;
