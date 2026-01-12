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

const uploader = multer({ storage: myStorage });
