const express = require('express');
const validate = require('../../middlewares/validate');

const router = new express.Router();

router.get('/', () => {
  return 'Ola mundo';
});

module.exports = router;
