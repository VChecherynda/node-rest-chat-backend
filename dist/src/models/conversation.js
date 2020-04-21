const Sequalize = require("sequelize");

const sequelize = require("../utils/database");

const User = require("./user");

const Conversation = sequelize.define("conversations", {
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

Conversation.hasOne(User, { foreignKey: "userOneId" });
Conversation.hasOne(User, { foreignKey: "userTwoId" });

module.exports = Conversation;
