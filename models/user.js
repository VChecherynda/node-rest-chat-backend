const Sequalize = require("sequelize");

const sequelize = require("../utils/database");

const Message = require("./message");

const User = sequelize.define("users", {
  id: {
    type: Sequalize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: { type: Sequalize.STRING, allowNull: false },
  email: { type: Sequalize.STRING, allowNull: false },
  password: { type: Sequalize.STRING, allowNull: false }
});

User.hasMany(Message);

module.exports = User;
