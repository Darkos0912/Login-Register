CREATE DATABASE LoginRegister;
USE LoginRegister;

CREATE TABLE `USERS` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `lastname` VARCHAR(255) NOT NULL,
   `username` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `password` VARCHAR(255) NOT NULL,
   `gender` VARCHAR(30) NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `age` VARCHAR(4) NOT NULL,
   `address` VARCHAR(255) NOT NULL,
   `role` VARCHAR(100) NOT NULL,
   PRIMARY KEY (`id`)
);

