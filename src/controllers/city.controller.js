const AppError = require('../utils/AppError');
const {ResponseAPI} = require('../utils/ResponseAPI');
const {CityService} = require('../services');

const CityController = {
  async createCity(req, res) {
    try {
      const resource = await CityService.insert(req.body);

      return ResponseAPI(res).success(resource, 201);
    } catch (error) {
      if (error instanceof AppError) {
        return ResponseAPI(res).error(
          'INVALID_RESOURCE',
          error.message,
          error.status,
        );
      }

      return ResponseAPI(res).error(
        'INVALID_RESOURCE',
        'Internal server error',
        500,
      );
    }
  },

  async searchCity(req, res) {
    try {
      const resources = await CityService.search(req.query);

      return ResponseAPI(res).success(resources);
    } catch (error) {
      if (error instanceof AppError) {
        return ResponseAPI(res).error(
          'INVALID_RESOURCE',
          error.message,
          error.status,
        );
      }

      return ResponseAPI(res).error(
        'INVALID_RESOURCE',
        'Internal server error',
        500,
      );
    }
  },
};

module.exports = CityController;
