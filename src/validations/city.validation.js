const Joi = require('joi');

const CityValidation = {
  createCity: {
    body: Joi.object().keys({
      name: Joi.string().required(),
      state: Joi.string().required().min(2).max(2),
    }),
  },
};

module.exports = CityValidation;
