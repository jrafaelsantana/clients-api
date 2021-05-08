const express = require('express');
const routes = require('./routes/v1');
const {ResponseAPI} = require('./utils/ResponseAPI');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/v1', routes);
app.use((req, res, next) => {
  next(
    new ResponseAPI(res).error(
      'INVALID_RESOURCE',
      'Not found',
      httpStatus.NOT_FOUND,
    ),
  );
});

module.exports = app;
