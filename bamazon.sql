DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    id integer not null auto_increment,
    itemname varchar(50) not null,
    itemname2 varchar(50) not null,
    primary key (id)
);