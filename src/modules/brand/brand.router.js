const router = require("express").Router();

router.post("/", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "brand created successfully ",
    message: "brand created successfully",
    meta: null,
  });
});
router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "brand detail of id:" + id,
    message: "brand detail",
    meta: null,
  });
});
router.get("/", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "get all brands details",
    message: "brands detail",
    meta: null,
  });
});
router.delete("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "delete brand of id:" + id,
    message: "delete brand ",
    meta: null,
  });
});
router.patch("/:id", (req, res) => {
  let id = req.params.id;
  res.json({
    result: "edit brand of id:" + id,
    message: "edit brand ",
    meta: null,
  });
});

module.exports = router;
