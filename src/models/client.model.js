module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('client', {
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
    sex: {
      type: new DataTypes.ENUM('MALE', 'FEMALE'),
      allowNull: false,
    },
    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  return Client;
};
