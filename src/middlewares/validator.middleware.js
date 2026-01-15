const validator = (schema) => {
  return async (req, res, next) => {
    try {
      const payload = req.body;
      await schema.validateAsync(payload);
      next();
    } catch (error) {
      next({ code: 422, message: error.message, result: null });
    }
  };
};

const paramsValidator = (schema) => {
  return async (req, res, next) => {
    try {
      const payload = req.params;
      await schema.validateAsync(payload);
      next();
    } catch (error) {
      next({ code: 422, message: error.message, result: null });
    }
  };
};

module.exports = { validator, paramsValidator };
