DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

DROP DATABASE IF EXISTS bamazon_db;
CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price INT NULL,
  stock_quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (1, "You Don't Know JS (Hard cover)", "Books", 20, 100);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (2, "Echo Dot", "Electronics", 40, 200);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (3, "Deadpool 2 Blu-Ray Disc", "Entertainment", 15, 300);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (4, "MacBook Pro", "Software/Computers", 1100, 400);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (5, "Seasonal Fruit Basket", "Produce", 20, 500);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (6, "Scorpion Studio Album CD Disc", "Entertainment", 18, 600);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (7, "GitHub Developer Plan Promo Code", "Software/Computers", 20, 10);

INSERT INTO products (id, product_name, department_name, price, stock_quantity)
VALUES (8, "Apple Developer Membership Promo Code", "Software/Computers", 50, 10);

SELECT * FROM products;