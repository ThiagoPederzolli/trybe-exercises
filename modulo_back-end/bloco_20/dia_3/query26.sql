Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para menores de idade. Os resultados devem estar ordenados por classificação mais abrangente primeiro.
```
SELECT * FROM sakila.film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC;
```