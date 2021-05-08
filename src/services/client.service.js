const {ClientRepository, CityRepository} = require('../repositories');
const AppError = require('../utils/AppError');

const ClientService = {
  async getById(id) {
    try {
      const resource = await ClientRepository.getById(id);

      if (!resource) {
        throw new AppError(404, 'Client not found');
      }

      return resource;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError(500, 'Internal error', error);
    }
  },

  async search({name}) {
    try {
      const resources = await ClientRepository.search({name});
      return resources;
    } catch (error) {
      throw new AppError(500, 'Internal error', error);
    }
  },

  async insert(client) {
    try {
      const city = await CityRepository.getById(client.cityId);

      if (!city) {
        throw new AppError(400, 'City not exists');
      }

      const resource = await ClientRepository.insert(client);
      return resource;
    } catch (error) {
      throw new AppError(500, 'Internal error', error);
    }
  },

  async delete(id) {
    try {
      const resource = await ClientRepository.getById(id);

      if (!resource) {
        throw new AppError(404, 'Client not found');
      }

      await ClientRepository.delete(id);
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError(500, 'Internal error', error);
    }
  },

  async updateName(id, name) {
    try {
      const resource = await ClientRepository.getById(id);

      if (!resource) {
        throw new AppError(404, 'City not found');
      }

      const updated = await ClientRepository.update(id, {name});

      return updated;
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }

      throw new AppError(500, 'Internal error', error);
    }
  },
};

module.exports = ClientService;
