var pgp = require("pg-promise")(/*options*/);
const conf = {
  host: "localhost", // server name or IP address;
  port: 5432, // default port number for PostgreSQL
  database: "test", // database name
  user: "postgres", // user name
  password: "salomeluna", // password
};
const db = pgp(
  `postgres://${conf.user}:${conf.password}@${conf.host}:${conf.port}/${conf.database}`
);

module.exports = db;
