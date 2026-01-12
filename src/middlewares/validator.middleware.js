const validator = (schema) => {
  return async (req, res, next) => {
    try {
      const payload = req.body;
      await schema.validateAsync(payload);
      next();
    } catch (error) {
      console.log(error);
      console.log("heeeeeeeeeeeeeeeeeeeeeeeeee");
      console.log(error.message);
      next({ code: 422, message: error.message, result: null });
    }
  };
};

module.exports = validator;
