import Sequelize from "Sequelize";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.DB_DIALECT);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // gimme postgres, please!
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST,
    port: 5432
  }
);

export default sequelize;
