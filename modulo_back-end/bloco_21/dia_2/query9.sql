Monte uma query que exiba o id do ator , nome , id do filme e título do filme , usando as tabelas actor , film_actor e film . Dica: você precisará fazer mais de um JOIN na mesma query .
```
SELECT A.actor_id, A.first_name, F.film_id, F.title
FROM sakila.actor AS A
INNER JOIN sakila.film_actor AS FA ON A.actor_id = FA.actor_id
INNER JOIN sakila.film AS F ON F.film_id = FA.film_id;
```