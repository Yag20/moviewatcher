DROP TABLE IF EXISTS movies;
CREATE TABLE movies (
	movie_id serial PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    year_of_publication int,
    lead_actor varchar(100)
);
COPY movies
FROM $str$/code/db_data/movies.csv$str$ 
DELIMITER ',' CSV HEADER;