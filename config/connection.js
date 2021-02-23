// Set up MySQL connection:
require("dotenv").config();
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Hacktheplanet",
    database: "todoagain_db"
  });
};
// Make connection:
connection.connect();

module.exports = connection;
