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



-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);
