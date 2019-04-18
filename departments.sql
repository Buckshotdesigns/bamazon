DROP DATABASE IF EXISTS supervisorDB;

CREATE DATABASE supervisorDB;

USE supervisorDB;

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