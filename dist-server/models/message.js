"use strict";

var Sequalize = require("sequelize");

var sequelize = require("../utils/database");

var User = require("./user");

var Conversation = require("./conversation");

var Message = sequelize.define("messages", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: {
    type: Sequalize.INTEGER,
    allowNull: false
  },
  conversationId: {
    type: Sequalize.INTEGER,
    allowNull: false
  },
  text: {
    type: Sequalize.STRING,
    allowNull: false
  }
});
Message.hasOne(User, {
  foreignKey: "userId"
});
Message.hasOne(Conversation, {
  foreignKey: "conversationId"
});
module.exports = Message;