
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

function showItems() {
    connection.query("SELECT * From products", function(err, results){
        if (err) throw err;
        console.log("===========================================");
        console.log("============Items In Store=================");
        console.log("===========================================");
        for (i = 0; i < results.length; i++){
            console.log("Item ID: " + results[i].id + " Product Name: " + results[i].product_name + " Department: " + results[i].department_name + " $" + results[i].price + " Left in Stock: " + results[i].stock_quantity)
        }
        console.log("===========================================");
        startQuestion();

    })
};
showItems();

function startQuestion() {
  inquirer
    .prompt([
        {
         name: "buyID",
         type: "input",
          message: "Which Item Id would you like to buy"
        },
        {
        name: "howMany",
        type: "input",
        message: "How many would you like to buy ?"
        }
    ])
    .then(function(answer) {

      connection.query("SELECT * FROM products WHERE id = ?", [answer.buyID], function(err,result){ 
       
        if (answer.howMany > result[0].stock_quantity) {
            console.log (answer.howMany);
            console.log("insufficient quantity available try again");
            startQuestion();
         } else {
             console.log("youve ordered " + answer.howMany + " " + result[0].product_name + " for the amount of $" + answer.howMany * result[0].price);

             connection.query("Update products SET ? Where ?",
            [
             {
                stock_quantity: result[0].stock_quantity - answer.howMany
             },{
                 id: answer.buyID
             }
            ], function(err) {
                if (err) throw err;
                newOrder();
            }
            
             )
         }
       
    });
    })
}

function newOrder() {
    inquirer
    .prompt([
        {
         name: "newChoice",
         type: "confirm",
          message: "would you like to place another order"
        }
    ])
    .then(function(answer) {

        if(answer.newChoice){
            showItems();
        } else {
            console.log("Thanks for shopping with Bamazon")
            connection.end();
        }

    });
    
}