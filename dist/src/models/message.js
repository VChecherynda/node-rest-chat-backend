const Sequalize = require("sequelize");

const sequelize = require("../utils/database");

const User = require("./user");
const Conversation = require("./conversation");

const Message = sequelize.define("messages", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  userId: { type: Sequalize.INTEGER, allowNull: false },
  conversationId: { type: Sequalize.INTEGER, allowNull: false },
  text: { type: Sequalize.STRING, allowNull: false }
});

Message.hasOne(User, { foreignKey: "userId" });
Message.hasOne(Conversation, { foreignKey: "conversationId" });

module.exports = Message;
