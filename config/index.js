const { Sequelize } = require("sequelize");
const config = require("./db.config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    dialect: config.dialect,
    host: config.host,
    // logging: false,
  }
);

module.exports = sequelize;
