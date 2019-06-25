/* Error handler for async / await functions */
const catchErrors = () => {
  return (req, res, next) => {
    return fn(req, res, next).catch(next);
  };
};

module.exports = catchErrors;
