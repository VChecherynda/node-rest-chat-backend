const Sequelize = require("Sequelize");

const sequelize = new Sequelize("api", "me", "password", {
  dialect: "postgres",
  host: "localhost",
  port: 5432
});

module.exports = sequelize;
