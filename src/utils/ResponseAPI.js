'use strict';

const ResponseAPI = {
  ResponseAPI(response) {
    return {
      success(data, statusCode = 200) {
        return response.status(statusCode).json({
          status: 'OK',
          result: data || null,
          error: null,
        });
      },

      error(code, message, statusCode = 500) {
        return response.status(statusCode).json({
          status: 'ERROR',
          error: {code, message},
        });
      },
    };
  },
};

module.exports = ResponseAPI;
