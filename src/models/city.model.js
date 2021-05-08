module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('city', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: new DataTypes.STRING(2),
      allowNull: false,
    },
  });

  return City;
};
