var mysql = require("mysql");
var inquirer = require("inquirer");
const chalk = require('chalk');


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;

  console.log(chalk.red("connected as id " + connection.threadId));
  // run the start function after the connection is made to prompt the user
  showProducts();
 
});

function showProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    if (err) throw err;

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].stock_quantity + " | " + res[i].price);
    }

    getOrder();
    
    
  });
}

function getOrder() {
  inquirer
    .prompt([

      {
        name: "id",
        type: "input",
        message: "what is the id of the produc youll like to buy? ",
      },

      {
        name: "quantity",
        type: "input",
        message: "how many would you like to buy? ",
      }

    ])
    .then(function (answer) {



      console.log(answer.id)
      console.log(answer.quantity)

const id= answer.id;
const quantity= answer.quantity;

order(id,quantity);

    });
}

function order(id, quantity){
	connection.query('Select * FROM products WHERE id = ' + id, function(err,res){

    if(err){console.log(err)};
    

		if(quantity <= res[0].stock_quantity){
			var totalCost = res[0].price * quantity;
			console.log("Good news your order is in stock!");
			console.log("Your total cost for " + quantity + " " +res[0].product_name + " is " + totalCost + " Thank you!");

      
      connection.query('UPDATE products SET stock_quantity = stock_quantity -' + quantity+ ' WHERE id = ' + id+' ');
      

		} else{
			console.log("Insufficient quantity, sorry we do not have enough " + res[0].product_name + "to complete your order.");
    };
    
    showProducts();
		
	});
};

