O setor financeiro quer saber nome, descrição, ano de lançamento e quais são os 100 filmes com o maior custo de substituição, do valor mais alto ao mais baixo, entre os filmes feitos para menores de idade e que têm o custo mínimo de substituição de $18,00 dólares.
```
SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE (rating = 'G' or rating = 'PG-13' or rating = 'PG') AND replacement_cost >= 18
ORDER BY replacement_cost DESC
LIMIT 100;
```