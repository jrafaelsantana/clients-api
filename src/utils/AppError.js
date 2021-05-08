class AppError extends Error {
  constructor(status = 500, ...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AppError);
    }

    this.status = status;
  }
}

module.exports = AppError;
