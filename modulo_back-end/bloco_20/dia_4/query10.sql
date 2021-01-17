Exclua do banco de dados o ator com o nome de "KARL".
```
SELECT * FROM sakila.actor
WHERE first_name = 'KARL';

DELETE FROM sakila.film_actor
WHERE actor_id = 12;

DELETE FROM sakila.actor
WHERE first_name = 'KARL';
```