const {CityRepository} = require('../repositories');
const AppError = require('../utils/AppError');

class CityService {
  static async getById(id) {
    try {
      const resource = await CityRepository.getById(id);

      if (resource) {
        throw new AppError(404, 'City not found');
      }

      return resource;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError(500, 'Internal error', error);
    }
  }

  static async search({name, state}) {
    try {
      const resources = await CityRepository.search({name, state});
      return resources;
    } catch (error) {
      throw new AppError(500, 'Internal error', error);
    }
  }

  static async insert(city) {
    try {
      const resource = await CityRepository.insert(city);
      return resource;
    } catch (error) {
      throw new AppError(500, 'Internal error', error);
    }
  }
}

module.exports = CityService;
