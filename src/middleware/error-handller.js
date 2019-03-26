const { APIError, InternalServerError } = require("rest-api-errors");
const { STATUS_CODES } = require("http");

// eslint-disable-next-line
const errorHandler = (err, req, res, next) => {
  const error = err.status === 401 || err instanceof APIError ? err : new InternalServerError();
  const { status = false } = err.data;

  if (status) {
    return res.status(status.code).json({
      message: status.message
    });
  }

  return res.status(error.status || 500).json({
    message: error.message || STATUS_CODES[error.status]
  });
};

module.exports = errorHandler;
