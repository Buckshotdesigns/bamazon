# bamazon

## PURPOSE 
Bamazon is a Mysql inventory and sales managemnet utility using the command line / bash interface and node backend. It allows the user to interact with inventory in 3 seperate views. 

-bamazon customer
-bamazon manager
-bamazon supervisor

## usage 
The application is using a mysql database with the file included as well as node dependencies that will need to be installed to run the application successfully. Once all those are installed the application is started by three different inputs for each view:

node bamazonCustomer
node bamazonManager
node bamazonSupervisor

## bamazonCustomer

<img width="782" alt="Screen Shot 2019-04-18 at 3 16 59 PM" src="https://user-images.githubusercontent.com/31428973/56385450-248eea00-61ed-11e9-851f-a8da104701f5.png">
 
 The user is prompted with a list of inventory and asked to select a product id and then the amount of that product. Once completed it shows the amount spent for that transaction and prompted for another transaction or to end.

 ## bamazonManager
 
 <img width="648" alt="Screen Shot 2019-04-18 at 3 38 22 PM" src="https://user-images.githubusercontent.com/31428973/56386763-adf3eb80-61f0-11e9-88ac-4039e666ce27.png">
 
<img width="648" alt="Screen Shot 2019-04-18 at 3 39 07 PM" src="https://user-images.githubusercontent.com/31428973/56386775-b3513600-61f0-11e9-90ed-0ff4cd6da761.png">

<img width="648" alt="Screen Shot 2019-04-18 at 3 40 30 PM" src="https://user-images.githubusercontent.com/31428973/56386784-b64c2680-61f0-11e9-8841-e57357aee7b4.png">

In this area you can view products for sale, check low inventory, add to inventory, and add new product category.
If there is no low inverntory(inventory less than 5) it returns no low inventory. 
If you want to add to inventory it will as whci product id and how much 
Lastly if you want to add a new product you will enter product name, category, price, and how many.


 

