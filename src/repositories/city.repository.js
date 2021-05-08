const {City, Client} = require('../database/models');
const Op = require('sequelize').Op;
const _ = require('lodash');

const CityRepository = {
  async getById(id) {
    const resource = await City.findByPk(id, {
      include: [
        {
          model: Client,
        },
      ],
    });
    return resource;
  },

  async search({name, state}) {
    const options = {
      where: {},
      include: [
        {
          model: Client,
        },
      ],
    };

    if (name) {
      options.where.name = {[Op.like]: `%${name}%`};
    }

    if (state) {
      options.where.state = {[Op.like]: `%${state}%`};
    }

    const resources = await City.findAll(options);
    return resources;
  },

  async insert(city) {
    const data = _.pick(city, City.fillable);
    const resource = await City.create(data);

    return resource;
  },
};

module.exports = CityRepository;
