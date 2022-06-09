drop database if exists greendevs_db;
create database greendevs_db;

use greendevs_db; 

drop table if exists Users;

create table Users(
id int primary key auto_increment,
name VARCHAR(100),
email VARCHAR(100),
avatar VARCHAR(100),
password VARCHAR(100),
privilege int,
status int,
created_at DATETIME,
updated_at DATETIME
);



drop table if exists Products; 

create table Products(
id int primary key auto_increment,
name VARCHAR(100),
price int,
specs TEXT,
description TEXT,
rating int,
discount int,
image VARCHAR(500),
created_at DATETIME,
updated_at DATETIME
);



drop table if exists Categories; 

create table Categories(
id int primary key auto_increment,
name VARCHAR(100),
created_at DATETIME,
updated_at DATETIME
);


drop table if exists Sales; 

create table Sales(
id int primary key auto_increment,
users_id int,
product_id int,
order_number int,
created_at DATETIME,
updated_at DATETIME,
foreign key (users_id) references Users(id)  ON DELETE CASCADE,
foreign key (product_id) references Products(id)  ON DELETE CASCADE
);



drop table if exists Images; 

create table Images(
id int primary key auto_increment,
address VARCHAR(100),
product_id int,
created_at DATETIME,
updated_at DATETIME,
main int,
foreign key (product_id) references Products(id)  ON DELETE CASCADE
);


drop table if exists Product_Categories;

create table Products_Categories(
id int primary key auto_increment,
product_id int, 
category_id int, 
created_at DATETIME,
updated_at DATETIME,
foreign key (product_id) references Products(id)  ON DELETE CASCADE,
foreign key (category_id) references Categories(id)  ON DELETE CASCADE
);
