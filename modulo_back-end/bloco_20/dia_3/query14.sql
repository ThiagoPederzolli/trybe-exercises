Precisamos descobrir quais são os 50 filmes feitos para maiores de 17 anos e adultos com a menor taxa de aluguel, para que possamos fazer uma divulgação melhor desses filmes.
```
SELECT *  FROM sakila.film
WHERE rating = 'NC-17' OR rating = 'R'
ORDER BY rental_rate
LIMIT 50;
```