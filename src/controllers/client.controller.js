const ClientController = {
  async createClient(request, response) {
    try {
      //Implement
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

  async searchClient(request, response) {
    try {
      //Implement
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

  async getClient(request, response) {
    try {
      //Implement
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

  async deleteClient(request, response) {
    try {
      //Implement
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

  async updateClient(request, response) {
    try {
      //Implement
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

module.exports = ClientController;
