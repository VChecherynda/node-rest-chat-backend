const Sequelize = require("Sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // gimme postgres, please!
    dialect: "postgres",
    host: "localhost",
    port: 5432
  }
);

module.exports = sequelize;
