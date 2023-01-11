CREATE TABLE users(
    id serial NOT NULL PRIMARY KEY,
    first_name VARCHAR(512) NOT NULL,
    last_name VARCHAR(512) NOT NULL,
    username VARCHAR(512) NOT NULL UNIQUE,
    email VARCHAR(512) NOT NULL UNIQUE,
    password VARCHAR(512) NOT NULL,
);

