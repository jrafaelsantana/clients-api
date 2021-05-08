const {ClientRepository} = require('../repositories');
const AppError = require('../utils/AppError');

class ClientService {
  static async getById(id) {
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
  }

  static async search({name}) {
    try {
      const resources = await ClientRepository.search({name});
      return resources;
    } catch (error) {
      throw new AppError(500, 'Internal error', error);
    }
  }

  static async insert(client) {
    try {
      const resource = await ClientRepository.insert(client);
      return resource;
    } catch (error) {
      throw new AppError(500, 'Internal error', error);
    }
  }

  static async delete(id) {
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
  }

  static async updateName(id, name) {
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
  }
}

module.exports = ClientService;
