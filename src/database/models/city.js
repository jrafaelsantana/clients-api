'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    static associate(models) {
      City.hasMany(models.Client);
    }

    static get fillable() {
      return ['name', 'state'];
    }
  }

  City.init(
    {
      name: DataTypes.STRING,
      state: DataTypes.STRING(2),
    },
    {
      sequelize,
      modelName: 'City',
      timestamps: true,
    },
  );

  return City;
};
