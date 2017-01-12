CREATE DATABASE Bamazon;
	USE Bamazon;
CREATE TABLE products (
	item_id INT(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10,5) NOT NULL,
    stock_quantity INT(11) NOT NULL,
    PRIMARY KEY (item_id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blue Basket", "Homeware", 15.00, 5),
("14K Gold Hoop Earrings", "Jewelery", 80.00, 3),
("Avocado Slicer", "Homeware", 10.50, 10),
("Bacon Bandages", "Health", 5.00, 15),
("Dog Mullet Headband", "Pets", 14.50, 2),
("Whole Chicken in a Can", "Food", 5.50, 25),
("Skittles", "Food", 2.00, 100),
("Chewbacca Costume XL", "Pets", 35.00, 10),
("Cheeto Flavored Mouthwash", "Health", 5.50, 3),
("Nimbus2000 Lounger", "Furniture", 250.00, 5);
