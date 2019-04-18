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
  supervisorOptions();
  
});
function supervisorOptions() {
inquirer
    .prompt([
        {
         name: "intro",
         type: "list",
          message: "What would you like to do?",
          choices: ["1) View sales by department", "2) Create new Department", "3) EXIT"]
        }
    ])
    .then(function(answer) {
        if (answer.intro === "1) View sales by department") {
            showDepartments();
        } else if (answer.intro === "2) Create new Department") {
            newDepartment();
        } else {
            console.log("Thank you for using Bamazon Supervisor view, Good Bye");
            connection.end();
        }

    });
};

function showDepartments() {
    connection.query("SELECT * From departments", function(err, result){
        if (err) throw err;
        var table = new Table({ head: ["Department ID", "Department Name", "Overhead Costs", "Product Sales"] });
        for (i = 0; i < result.length; i++){
            table.push(
                [result[i].department_id, result[i].department_name, result[i].overhead_costs, "$" + result[i].product_sales]
            );
        }
        console.log(table.toString());
    // var query = "SELECT departments.department_id, ";
    // query += "departments.department_name, ";
    // query += "FORMAT(departments.overhead_costs, 2) AS overhead_costs, ";
    // query += "FORMAT(SUM(IFNULL(departments.product_sales,0)), 2) AS product_sales, ";
    // query += "FORMAT(SUM(IFNULL(departments.product_sales,0))-overhead_costs, 2) AS total_profit ";
    // query += "FROM departments ";
    // query += "LEFT JOIN products ON departments.department_name = products.department_name ";
    // query += "GROUP BY departments.department_name ";
    // query += "ORDER BY department_id;"
    // connection.query(query, function(err, result) {
      if (err) throw err;
        newOrder();
    })
};

function newDepartment() {
    inquirer
    .prompt([
        {
        name: "departmentName",
        type: "input",
        message: "What's the name of the department you would like to add?"
        },{
        name: "overhead",
        type: "input",
        message: "What's the overhead cost?",
        validate: function(value) {
            if (isNaN(value) === false) {
              return true;
            }
            return false;
          }
        }
    ])
    .then(function(answer) {
        connection.query("Insert into departments SET ?",{
            department_name: answer.departmentName,
            overhead_costs: answer.overhead
        }, function(err,result){});
        newOrder();
    });
};

function newOrder() {
    inquirer
    .prompt([
        {
         name: "newChoice",
         type: "confirm",
          message: "would you like to anything else"
        }
    ])
    .then(function(answer) {

        if(answer.newChoice){
            supervisorOptions();
        } else {
            console.log("Thanks for using Bamazon Good Bye")
            connection.end();
        }
    });    
}