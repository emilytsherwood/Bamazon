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

//Inserting items into MySQL database
connection.query("INSERT INTO products SET ?", {
	item_id: 2001,
	product_name: "Blue Basket",
	department_name: "Homeware",
	price: 15.00,
	stock_quantity: 5
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 5002,
	product_name: "14K Gold Hoop Earrings",
	department_name: "Jewelery",
	price: 80.00,
	stock_quantity: 3
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 3000,
	product_name: "Avocado Slicer",
	department_name: "Homeware",
	price: 10.50,
	stock_quantity: 10
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 1300,
	product_name: "Bacon Bandages",
	department_name: "Health",
	price: 5.00,
	stock_quantity: 15
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 1003,
	product_name: "Dog Mullet Headband",
	department_name: "Pets",
	price: 14.50,
	stock_quantity: 2
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 80002,
	product_name: "Whole Chicken in a Can",
	department_name: "Food",
	price: 5.50,
	stock_quantity: 25
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 81134,
	product_name: "Skittles",
	department_name: "Food",
	price: 2.00,
	stock_quantity: 100
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 1004,
	product_name: "Chewbacca Costume XL",
	department_name: "Pets",
	price: 35.00,
	stock_quantity: 10
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 1303,
	product_name: "Cheeto Flavored Mouthwash",
	department_name: "Health",
	price: 5.50,
	stock_quantity: 3
}, function (err, res) {});

connection.query("INSERT INTO products SET ?", {
	item_id: 6161,
	product_name: "Nimbus2000 Lounger",
	department_name: "Furniture",
	price: 250.00,
	stock_quantity: 5
}, function (err, res) {});

//Displaying all of the items available for sale (ids, nmes, prices and products)
connection.query("SELECT * FROM products", function(err, rows) {
	if(err) throw err;
	console.log("Items for sale:\n");
	console.log(rows);
});