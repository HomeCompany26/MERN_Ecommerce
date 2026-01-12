const Joi = require("joi");

const registerSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
});

module.exports = { registerSchema };
