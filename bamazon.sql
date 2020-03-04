-- Drops the animals_db if it exists currently --
DROP DATABASE IF EXISTS bamazon_db;
-- Creates the "animals_db" database --
CREATE DATABASE bamazon_db;

-- Makes it so all of the following code will affect animals_db --
USE bamazon_db;

-- Creates the table "people" within animals_db --
CREATE TABLE people (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
 id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a sting column called "pet_name" --
  department_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  stock_quantity INTEGER(10),

  price INTEGER(10),

  -- Sets id as this table's primary key which means all data contained within it will be unique --
  PRIMARY KEY (id)
);

Select * FROM products;

INSERT INTO products (id, product_name,department_name,stock_quantity,price) 
VALUES (1, "iphone", "electronics", 8, 500),
	   (2, "s10+", "electronics", 9, 1200),
	   (3, "pixel phone", "electronics",7 , 600),
	   (4, "ipad", "electronics", 4, 500),
	   (5, "surface book", "electronics", 2, 1600),
	   (6, "xbox one", "electronics", 2, 400),
	   (7, "PS 4", "electronics", 4, 450),
	   (8, "iwatch", "electronics", 9, 250),
	   (9, "headphones", "electronics", 19, 99),
	   (10, "gps", "electronics", 10, 50)