Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor .
```
SELECT a.first_name, a.actor_id, f.film_id
FROM sakila.actor AS a
JOIN sakila.film_actor AS f
ON c.actor_id = a.actor_id;
```