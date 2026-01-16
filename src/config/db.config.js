require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: process.env.MONGO_DB_NAME,
      autoIndex: true,
      autoCreate: true,
    });
    console.log("database connection success");
  } catch (error) {
    console.log(error);
    console.log("database connection failure");
    process.exit();
  }
};

dbConnect();
