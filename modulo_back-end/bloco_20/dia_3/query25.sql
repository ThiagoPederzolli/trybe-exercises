Encontre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro.
```
SELECT * FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC;
```