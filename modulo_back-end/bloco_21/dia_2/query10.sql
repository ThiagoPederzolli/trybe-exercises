Quero encontrar o título e custo de substituição de todos os filmes que tem a mesma duração:
```
SELECT a.title, a.replacement_cost, b.title, b.replacement_cost
FROM sakila.film AS a, sakila.film AS b
WHERE a.length = b.length;
```