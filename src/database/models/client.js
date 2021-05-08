'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE',
      });
    }
  }
  Client.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.ENUM,
      birthdate: DataTypes.DATE,
      cityId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Client',
      timestamps: true,
    },
  );
  return Client;
};
