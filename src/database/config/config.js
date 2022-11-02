const Config = require("../../config/config");
console.log(`this ---- `, Config.DB_USER);

module.exports = {
  development: {
    username: "admin",
    password: "tSESiLcNP,=bnrF]n+P#",
    database: "merchant_app",
    host: "svc-4475f708-f093-4ce9-8739-c335095d585b-dml.aws-mumbai-1.svc.singlestore.com",
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
