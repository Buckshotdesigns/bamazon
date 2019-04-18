var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require('cli-table2');
// connectng to the mysql database 
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "trilogy-2",
  password: "password123",
  database: "bamazonDB"
});

connection.connect(function(err) {
  if (err) throw err;
  
});