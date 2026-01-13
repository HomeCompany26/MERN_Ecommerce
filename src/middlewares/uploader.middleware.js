const { randomString } = require("../config/helper.config");

const multer = require("multer");
const fs = require("fs");

const myStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const path = "./public/uploads";
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }
    cb(null, path);
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(" ").pop();
    const fileName = randomString() + "." + ext;
    cb(null, fileName);
  },
});

const imageFilter = (req, file, cb) => {
  const ext = file.originalname.split(".").pop();
  if (
    ["jpg", "jped", "png", "svg", "gif", "webp", "bmp"].includes(
      ext.toLowerCase()
    )
  ) {
    cb(null, true);
  } else {
    cb({ code: 422, message: "file format not supported" });
  }
};

const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
  limits: {
    fileSize: 5000000,
  },
});

module.exports = uploader;
