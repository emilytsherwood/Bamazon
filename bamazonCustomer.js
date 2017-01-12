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

//Displaying all of the items available for sale (ids, nmes, prices and products)
connection.query("SELECT * FROM products", function(err, rows) {
    if (err) throw err;
    console.log("Items for sale:\n");
    console.log(organized(rows));
});

var startBuy = function() {
    inquirer.prompt([{
        name: "id",
        type: "list",
        message: "What is the ID number of the product you want to buy?",
        choices: ["1003", "1004", "1300", "1303", "2001", "3000", "5002", "6161", "80002", "81134"]
    }, {
        name: "units",
        type: "input",
        message: "How many would you like to order?"
    }]).then(function(answer) {
    	connection.query("SELECT * FROM products WHERE ?", {
    		item_id: answer.id
    	}, function(err, result){
    		console.log(result);
    	}); 
    });
};
startBuy();

//Checking the inventory
var inventory = function(id, quantity) {
	connection.query("SELECT * FROM products WHERE item_id = ?", function(err, result) {
		if(err) throw err;

		// for (var i = 0; i < .length; i++) {
		// 	[i]
		// }
		return id;
	});
inventory();
};

function organized(items) {
	for (var i = 0; i < items.length; i++) {
		console.log("Item Id: " + items[i].item_id);
		console.log("Product Name: " + items[i].product_name);
		console.log("Department Name: " + items[i].department_name);
		console.log("Price: " + items[i].price);
		console.log("Quantity: " + items[i].stock_quantity);
	}
}


