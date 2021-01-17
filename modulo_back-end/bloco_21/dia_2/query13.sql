Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração. Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
```
SELECT a.title, a.rental_duration, b.title, b.rental_duration
FROM sakila.film AS a, sakila.film AS b
WHERE a.rental_duration = b.rental_duration
HAVING a.rental_duration BETWEEN 2 AND 4;
```