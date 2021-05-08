'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Cities',
      [
        {
          name: 'Gravatá',
          state: 'PE',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Olinda',
          state: 'PE',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Cities', null, {});
  },
};
