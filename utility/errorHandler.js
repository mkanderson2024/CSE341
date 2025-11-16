
// Global error handling for routes
const errorHandler = (controllerFunction) => {
  return async (req, res, next) => {
    try {
      await controllerFunction(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

module.exports = errorHandler