"use strict";

var Sequelize = require("Sequelize");

var sequelize = new Sequelize("api", "me", "password", {
  dialect: "postgres",
  host: "localhost",
  port: 5432
});
module.exports = sequelize;