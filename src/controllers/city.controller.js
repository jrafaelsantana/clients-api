const AppError = require('../utils/AppError');
const {ResponseAPI} = require('../utils/ResponseAPI');
const {CityService} = require('../services');

const CityController = {
  async createCity(request, response) {
    try {
      const resource = await CityService.insert(request.body);

      return ResponseAPI(response).success(resource, 201);
    } catch (error) {
      if (error instanceof AppError) {
        return ResponseAPI(response).error(
          'INVALID_RESOURCE',
          error.message,
          error.status,
        );
      }

      return ResponseAPI(response).error(
        'INVALID_RESOURCE',
        'Internal server error',
        500,
      );
    }
  },

  async searchCity(request, response) {
    try {
      const resources = await CityService.search(request.query);

      return ResponseAPI(response).success(resources);
    } catch (error) {
      if (error instanceof AppError) {
        return ResponseAPI(response).error(
          'INVALID_RESOURCE',
          error.message,
          error.status,
        );
      }

      return ResponseAPI(response).error(
        'INVALID_RESOURCE',
        'Internal server error',
        500,
      );
    }
  },
};

module.exports = CityController;
