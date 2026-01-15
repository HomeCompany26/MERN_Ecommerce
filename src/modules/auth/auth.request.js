const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  role: Joi.string(),
});
const activationToken = Joi.object({
  token: Joi.string().length(100).required(),
});

const passwordSchema = Joi.object({
  password: Joi.string().min(5).max(25).required(),
  confirm_password: Joi.ref("password"),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(5).max(25).required(),
});

const forgetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  registerSchema,
  activationToken,
  passwordSchema,
  loginSchema,
  forgetPasswordSchema,
};
