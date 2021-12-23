var pgp = require("pg-promise")(/*options*/);
/* const conf = {
  host: "ec2-3-217-170-198.compute-1.amazonaws.com",
  port: 5432, // default port number for PostgreSQL
  database: "de5001mav3h8q7", // database name
  user: "zmzcrlvamxduyl", // user name
  password: "5097ae04a5d1d1e4ba9826baf1c58233ee4c5908209505f7697a37f7864c115a", // password
}; */

const conf = {
  host: "localhost", //host: "ec2-3-217-170-198.compute-1.amazonaws.com",
  port: 5432, // default port number for PostgreSQL
  database: "test", //database: "de5001mav3h8q7", // database name
  user: "postgres", //user: "zmzcrlvamxduyl", // user name
  password: "salomeluna", //password: "5097ae04a5d1d1e4ba9826baf1c58233ee4c5908209505f7697a37f7864c115a", // password
};

const db = pgp(
  `postgres://${conf.user}:${conf.password}@${conf.host}:${conf.port}/${conf.database}`
);

module.exports = db;
