DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(90) NULL,
  department_name VARCHAR(90) NULL,
  price decimal(10,4) NULL,
  stock_quantity INTEGER(10)null,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sham Wow", "Household", 50, 25),
("Chewy Donut", "Pet-Supplies", 10, 100),
("Large Farva", "Grocery", 5, 125),
("Slap-Chop", "Household", 59, 12),
("Prison-Shank", "Sporting-Goods", 62, 3),
("Hard Drive", "Electronics", 125, 10),
("DVD: Reefer Madness", "Electronics", 18, 19),
("Man Bun Holders", "Beauty", 6, 200),
("Unicorn Tears", "Grocery", 4, 1000),
("Captain America Shield", "Sporting-Goods", 3, 175);


CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(90) NULL,
  overhead_costs integer(10) NULL,
  product_sales INTEGER(10) DEFAULT 0,
  PRIMARY KEY (department_id)
);


INSERT INTO departments (department_name, overhead_costs, product_sales)
VALUES ("Electronics", 5000, 10455),
("Grocery", 2000, 4785),
("Household", 8000, 7590),
("Sporting-Goods", 1000, 15786),
("Beauty", 9000, 120500),
("Pet-Supplies", 2000, 7842);