Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme vinculado ao registro de inventário com esse id.
```
USE sakila;
DELIMITER $$

CREATE FUNCTION retornaTitulo(id INT)
RETURNS VARCHAR(50) READS SQL DATA
BEGIN
	DECLARE titulo_filme VARCHAR(50);
    SELECT f.title
    FROM sakila.film AS f
    INNER JOIN sakila.inventory AS i ON i.film_id = f.film_id
    WHERE i.inventory_id = id
    INTO titulo_filme;
    RETURN titulo_filme;
END $$

DELIMITER ;
```