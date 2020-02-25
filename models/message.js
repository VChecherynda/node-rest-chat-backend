const Sequalize = require("sequelize");

const sequelize = require("../utils/database");

const Message = sequelize.define("messages", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: { type: Sequalize.STRING, allowNull: false },
  text: { type: Sequalize.STRING, allowNull: false }
});

module.exports = Message;
