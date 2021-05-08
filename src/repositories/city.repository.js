const {City, Client} = require('../database/models');

class CityRepository {
  static async getById(id) {
    const resource = await City.findByPk(id, {
      include: [
        {
          model: Client,
        },
      ],
    });
    return resource;
  }

  static async search({name, state}) {
    const options = {
      where: {},
      include: [
        {
          model: Client,
        },
      ],
    };

    if (name) {
      options.where.name = name;
    }

    if (state) {
      options.where.state = state;
    }

    const resources = await City.findAll(options);
    return resources;
  }

  static async insert(city) {
    const resource = await City.create(city);
    return resource;
  }
}

module.exports = CityRepository;
