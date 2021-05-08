const AppError = require('../utils/AppError');
const {ResponseAPI} = require('../utils/ResponseAPI');
const {ClientService} = require('../services');

const ClientController = {
  async createClient(req, res) {
    try {
      const resource = await ClientService.insert(req.body);

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

  async searchClient(req, res) {
    try {
      const resources = await ClientService.search(req.query);

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

  async getClient(req, res) {
    try {
      const resource = await ClientService.getById(req.params.id);

      return ResponseAPI(res).success(resource);
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

  async deleteClient(req, res) {
    try {
      const resource = await ClientService.delete(req.params.id);

      return ResponseAPI(res).success(resource);
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

  async updateClient(req, res) {
    try {
      const resource = await ClientService.updateName(
        req.params.id,
        req.body.name,
      );

      return ResponseAPI(res).success(resource);
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

module.exports = ClientController;
