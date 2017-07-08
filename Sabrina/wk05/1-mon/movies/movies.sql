DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id serial PRIMARY KEY,
  title varchar NOT NULL,
  director varchar NOT NULL,
  released varchar NOT NULL,
  summary varchar NOT NULL,
  poster varchar NOT NULL
);
