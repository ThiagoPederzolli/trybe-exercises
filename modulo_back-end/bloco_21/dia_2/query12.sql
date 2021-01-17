Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
```
SELECT a.film_id, a.replacement_cost, b.film_id, b.replacement_cost
FROM sakila.film AS a, sakila.film AS b
WHERE a.replacement_cost = b.replacement_cost;
```