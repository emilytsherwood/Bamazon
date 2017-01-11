//Loading mysql and inquirer packages
var mysql = require("mysql");
var inquirer = require("inquirer");
//Syncing with the MYSQL database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  //Username
  user: "root",

  //Password
  password: "12345",
  database: "Bamazon"
});
//Creates the connection to the server
connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
});

