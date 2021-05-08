require('dotenv/config');
const Sequelize = require('sequelize');

const {DB_HOST, DB_USER, DB_PASS, DB_DATABASE} = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASS, {
  dialect: 'mysql',
  host: DB_HOST,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cities = require('./city.model')(sequelize, Sequelize);
db.clients = require('./client.model')(sequelize, Sequelize);

db.cities.hasMany(db.clients, {as: 'cities'});
db.clients.belongsTo(db.cities, {
  foreignKey: 'city_id',
  as: 'city',
});

module.exports = db;
