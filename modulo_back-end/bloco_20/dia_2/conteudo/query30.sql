- Agora vamos tentar fazer o seguinte: crie uma query para encontrar os 20 primeiros filmes, incluindo titulo, ano de lançamento, duração, classificação indicativa e custo de substituição. Ordene os resultados pelos filmes com a maior duração e depois pelo menor custo de substituição.
```
SELECT title, release_year, length, rating, replacement_cost FROM sakila.film
ORDER BY length DESC, replacement_cost
LIMIT 20;
```