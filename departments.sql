DROP DATABASE IF EXISTS supervisorDB;

CREATE DATABASE supervisorDB;

USE supervisorDB;

CREATE TABLE departments (
  department_id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(90) NULL,
  overhead_costs integer(10) NULL,
  PRIMARY KEY (department_id)
);

ALTER TABLE products
ADD COLUMN product_sales INTEGER(10) DEFAULT 0 AFTER stock_quantity;