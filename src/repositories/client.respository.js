const {City, Client} = require('../database/models');

class ClientRepository {
  static async getById(id) {
    const resource = await Client.findByPk(id, {
      include: [
        {
          model: City,
        },
      ],
    });
    return resource;
  }

  static async search({name}) {
    const options = {
      where: {},
      include: [
        {
          model: City,
        },
      ],
    };

    if (name) {
      options.where.name = name;
    }

    const resources = await Client.findAll(options);
    return resources;
  }

  static async insert(client) {
    const resource = await Client.create(client);
    return resource;
  }

  static async delete(id) {
    await Client.destroy({where: {id}});
  }

  static async updateName(id, name) {
    const resource = await Client.findByPk(id);
    resource.name = name;

    const newResource = await resource.save();
    return newResource;
  }
}

module.exports = ClientRepository;
