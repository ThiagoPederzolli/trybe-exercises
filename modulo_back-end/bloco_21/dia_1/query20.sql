Monte uma query que exiba a média de duração por classificação indicativa ( rating ) dos filmes cadastrados na tabela sakila.film . Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
```
SELECT AVG(length) AS `Média de Duração`, rating
FROM sakila.film
GROUP BY rating
ORDER BY `Média de Duração` DESC;
```