const Config = require("../../config/config");

module.exports = {
  development: {
    username: Config.DB_USER,
    password: Config.DB_PASSWORD,
    database: Config.DB_NAME,
    host: Config.DB_HOST,
    dialect: "mysql",
    migrationStorage: "json",
    migrationStoragePath: "migrations/sequelizeMeta.json",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
