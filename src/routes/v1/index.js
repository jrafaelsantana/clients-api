const express = require('express');
const validate = require('../../middlewares/validate');

const {CityController} = require('../../controllers');
const {CityValidation} = require('../../validations');

const router = new express.Router();

router.get('/', (req, res, next) => {
  res.send({status: 'up'});
});

router
  .route('/city')
  .get(CityController.searchCity)
  .post(validate(CityValidation.createCity), CityController.createCity);

module.exports = router;
