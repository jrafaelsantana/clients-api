const express = require('express');
const validate = require('../../middlewares/validate');

const {CityController, ClientController} = require('../../controllers');
const {CityValidation, ClientValidation} = require('../../validations');

const router = new express.Router();

router.get('/', (req, res, next) => {
  res.send({status: 'up'});
});

/**
 * CityController
 */

router
  .route('/city')
  .get(CityController.searchCity)
  .post(validate(CityValidation.createCity), CityController.createCity);

/**
 * ClientController
 */
router.get('/client', ClientController.searchClient);
router.post(
  '/client',
  validate(ClientValidation.createClient),
  ClientController.createClient,
);
router.get('/client/:id', ClientController.getClient);
router.delete('/client/:id', ClientController.deleteClient);
router.put(
  '/client/:id',
  validate(ClientValidation.updateClient),
  ClientController.updateClient,
);

module.exports = router;
