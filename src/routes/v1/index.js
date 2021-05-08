const express = require('express');
const validate = require('../../middlewares/validate');

const router = new express.Router();

router.get('/', (req, res, next) => {
  res.send({message: 'Ola mundo'});
});

module.exports = router;
