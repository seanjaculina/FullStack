const { Sequelize } = require('sequelize');
// Bring in our environment vars
const { PG_USERNAME, PG_PASS } = process.env;

// New sequelize instance to connect to DB - see docs
module.exports = new Sequelize('codegig', PG_USERNAME, PG_PASS, {
  host: 'localhost',
  dialect: 'postgres',
});
