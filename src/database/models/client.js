'use strict';
const {Model} = require('sequelize');
const AgeFromDate = require('../../utils/ageFromDate');

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

    toJSON() {
      const values = Object.assign({}, this.get());

      delete values.CityId;
      return values;
    }
  }
  Client.init(
    {
      name: DataTypes.STRING,
      sex: DataTypes.ENUM('MALE', 'FEMALE'),
      birthdate: DataTypes.DATE,
      age: {
        type: DataTypes.VIRTUAL,
        get() {
          return AgeFromDate(this.birthdate);
        },
      },
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
