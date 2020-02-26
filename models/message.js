const Sequalize = require("sequelize");

const sequelize = require("../utils/database");

const Conversation = require("./conversation");

const Message = sequelize.define("messages", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  text: { type: Sequalize.STRING, allowNull: false },
  conversationId: { type: Sequalize.INTEGER, allowNull: false }
});

Message.hasOne(Conversation, { foreignKey: "conversationId" });

module.exports = Message;
