"use strict";

var Sequalize = require("sequelize");

var sequelize = require("../utils/database");

var User = sequelize.define("users", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequalize.STRING,
    allowNull: false
  },
  email: {
    type: Sequalize.STRING,
    allowNull: false
  },
  password: {
    type: Sequalize.STRING,
    allowNull: false
  }
});
module.exports = User;