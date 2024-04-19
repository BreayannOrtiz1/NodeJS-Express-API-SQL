CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;
CREATE TABLE employee (
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES
    (1, 'joe', 1000),
    (2, 'rex', 2500),
    (3, 'Alf', 3500),
    (4, 'Pedro', 5000);