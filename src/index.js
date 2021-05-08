require('dotenv/config');
const app = require('./app');
const db = require('./models');
const PORT = process.env.PORT;

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
  });
});
