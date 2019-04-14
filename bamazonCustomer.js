
var mysql = require("mysql");
var inquirer = require("inquirer");

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


function start() {
  inquirer
    .prompt({
      name: "postOrBid",
      type: "list",
      message: "Would you like to [POST] an auction or [BID] on an auction?",
      choices: ["POST", "BID", "EXIT"]
    })
    .then(function(answer) {
      
      if (answer.postOrBid === "POST") {
        postAuction();
      }
      else if(answer.postOrBid === "BID") {
        bidAuction();
      } else{
        connection.end();
      }
    });
}