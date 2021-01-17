Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.
```
USE sakila;
DELIMITER $$

CREATE FUNCTION QuantidadeFilmesPorCategoria(category VARCHAR(50))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE quantidade_filmes INT;
    SELECT COUNT(*)
    FROM sakila.category AS c
    INNER JOIN sakila.film_category AS fc
    ON fc.category_id = c.category_id
    WHERE name = category
    INTO quantidade_filmes;
    RETURN quantidade_filmes;
END $$

DELIMITER ;
```