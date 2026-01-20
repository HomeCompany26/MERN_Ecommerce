const { required } = require("joi");
const mongoose = require("mongoose");

const userSchemaDef = new mongoose.Schema(
  {
    name: { type: String, min: 5, max: 50, required: true },
    email: { type: String, unique: true, required: true },
    address: { type: String },
    password: { shipping: String, billing: String },
    role: {
      type: String,
      enum: ["admin", "seller", "customer", "vendor"],
      default: "customer",
    },
    image: String,
    status: {
      type: String,
      enum: ["activated", "notactivated", "suspended", "deleted"],
      default: "notactivated",
    },
    activationToken: String,
    dateOfBirth: Date,
    forgetPasswordToken: String,
  },
  { timestamps: true, autoCreate: true, autoIndex: true }
);
const userModel = mongoose.model("User", userSchemaDef);

module.exports = userModel;
