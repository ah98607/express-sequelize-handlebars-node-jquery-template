// import npm module
var Sequelize = require("sequelize");

// configure sequelize instance
// be sure to run mysql command to create database instance
var sequelize = new Sequelize("database_name", "root", "andyhemysql123", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// define table structure
var myTable = sequelize.define("table_name",
{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  }
},
{
  timestamps: false
});

// sync table
myTable.sync();

// combined model and ORM
var model = {
  all: function(callback) {
    myTable.findAll({// empty constraint
    }).then(function(result) {
      callback(result);
    });
  },
  search: function(name, callback) {
    myTable.findAll({
      where:
      {
        name: name
      }
    }).then(function(result) {
      callback(result);
    });
  },
  add: function(callback) {
    myTable.create({
      id: 1,
      name: character.name
    }).then(function(result) {
      callback(result);
    });
  }
};

// export model to controller
module.exports = model;
