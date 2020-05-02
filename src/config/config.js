// compare to process.env
console.dir(process.process.argv[4]);

module.exports = {
  development: {
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
  },
  test: {
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
  },
  production: {
    username: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    host: "localhost",
    dialect: "postgres",
    operatorsAliases: false
  }
};
