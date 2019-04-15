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
// populating items from the sql database
function viewProducts() {
    connection.query("SELECT * From products", function(err, results){
        if (err) throw err;
        var table = new Table({ head: ["Item ID", "Product Name", "Department", "Price", "Stock Quantity"] });
        for (i = 0; i < results.length; i++){
            table.push(
                [results[i].id, results[i].product_name, results[i].department_name, "$" + results[i].price , results[i].stock_quantity]
            );
        }
        console.log(table.toString());
    })
};

function startQuestion() {
    inquirer
      .prompt([
          {
           name: "whatOption",
           type: "list",
            message: "What would you like to do",
            choices: ["1) View products for sale","2) View low inventory", "3) Add to inventory", "4) Add new product"]
          }
      ])
      .then(function(answer) {
        if (answer.whatOption === "1) View products for sale") {
            viewProducts();
            followUp();
        }

      });
    };

    startQuestion();

    function followUp() {
       inquirer
       .prompt([
            {
             name: "next",
             type: "confirm",
              message: "What would you like to do anything else",
            }
        ])
        .then(function(answer) {
            if (answer.next) {
               startQuestion();
            } else {
                console.log("Thanks for using Bamazon Manager View, Good Bye");
                connection.end();
            }
    
          });
    }