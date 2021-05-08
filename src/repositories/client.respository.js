const {City, Client} = require('../database/models');
const Op = require('sequelize').Op;
const _ = require('lodash');

const ClientRepository = {
  async getById(id) {
    const resource = await Client.findByPk(id, {
      include: [
        {
          model: City,
        },
      ],
    });
    return resource;
  },

  async search({name}) {
    const options = {
      where: {},
      include: [
        {
          model: City,
        },
      ],
    };

    if (name) {
      options.where.name = {[Op.like]: `%${name}%`};
    }

    const resources = await Client.findAll(options);
    return resources;
  },

  async insert(client) {
    const data = _.pick(client, Client.fillable);
    const resource = await Client.create(data);

    return resource;
  },

  async delete(id) {
    await Client.destroy({where: {id}});
  },

  async update(id, client) {
    let resource = await Client.findByPk(id);
    const data = _.pick(client, Client.fillable);

    resource = {...resource, ...data};

    const newResource = await resource.save();
    return newResource;
  },
};

module.exports = ClientRepository;
