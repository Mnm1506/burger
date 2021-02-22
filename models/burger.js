// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  create: function (value, cb) {
    orm.insertOne("burgers", value, function (res) {
      cb(res);
    });
  },

  update: function (condition, id, cb) {
    condition = "devoured = true"
    orm.updateOne("burgers", condition, id, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;