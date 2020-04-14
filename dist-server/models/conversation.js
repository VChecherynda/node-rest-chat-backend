"use strict";

var Sequalize = require("sequelize");

var sequelize = require("../utils/database");

var User = require("./user");

var Conversation = sequelize.define("conversations", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userOneId: {
    type: Sequalize.INTEGER,
    allowNull: false
  },
  userTwoId: {
    type: Sequalize.INTEGER,
    allowNull: false
  }
});
Conversation.hasOne(User, {
  foreignKey: "userOneId"
});
Conversation.hasOne(User, {
  foreignKey: "userTwoId"
});
module.exports = Conversation;