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
    organized();
});

//Asking the customer what they want to buy and allowing them to input quanity and select id number
var startBuy = function() {
    inquirer.prompt([{
        name: "id",
        type: "list",
        message: "What is the ID number of the product you want to buy?",
        choices: ["81135", "81136", "81137", "81138", "81139", "81140", "81141", "81142", "81143", "81144"]
    }, {
        name: "units",
        type: "input",
        message: "How many would you like to order?"
    }]).then(function(answer) {
        connection.query("SELECT * FROM products WHERE ?", {
            item_id: answer.id
        }, function(err, result) {
            console.log(result);
            if (answer.units > result[0].stock_quantity) {
                console.log("Sorry, insufficient quantity");
            } else
            	connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: result[0].stock_quantity - answer.units
              }, {
                id: answer.id
              }], function(err, res) {
                console.log("Processing your order!");
              });
            	
        });
    });
};
startBuy();

//Function to display all the items for sale
var organized = function() {
    connection.query("SELECT * FROM products", function(err, items) {
        if (err) throw err;
        for (var i = 0; i < items.length; i++) {

            console.log("Item for sale:\n" + "Id: " + items[i].item_id + " " + "Product: " + items[i].product_name + " " + "Price: $" + items[i].price);
        }

    });
};






