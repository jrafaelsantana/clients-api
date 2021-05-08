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

    static get fillable() {
      return ['name', 'sex', 'birthdate', 'cityId'];
    }
  }
  Client.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.ENUM('MALE', 'FEMALE'),
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
