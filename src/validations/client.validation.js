const Joi = require('joi');

const ClientValidation = {
  createClient: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      sex: Joi.string().required().valid('MALE', 'FEMALE'),
      birthdate: Joi.date().iso().required(),
      cityId: Joi.number().required(),
    }),
  },

  updateClient: {
    body: Joi.object().keys({
      name: Joi.string().required(),
    }),
  },
};

module.exports = ClientValidation;
