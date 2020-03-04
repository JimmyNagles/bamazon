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
connection.connect(function(err) {
  if (err) throw err;

  console.log(chalk.red("connected as id "+connection.threadId));
  // run the start function after the connection is made to prompt the user
  // start();
  
});


  
 

