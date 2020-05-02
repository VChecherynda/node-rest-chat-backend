// compare to process.env
import dotenv from "dotenv";
dotenv.config();

const env = process.env.NODE_ENV || "development";

export default {
  [env]: {
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false
  }
};
