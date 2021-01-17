Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de filmes em que atuaram. 
```
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsByFilms()
BEGIN
    SELECT actor_id, COUNT(film_id) AS `Quantidade de Filmes`
    FROM sakila.film_actor
    GROUP BY actor_id
    ORDER BY `Quantidade de Filmes` DESC
    LIMIT 10;
END $$

DELIMITER ;

-- Como usar:

CALL ShowActorsByFilms();
```