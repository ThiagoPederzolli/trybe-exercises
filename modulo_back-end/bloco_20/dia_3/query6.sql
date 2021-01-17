no banco sakila na tabela film, exibir todos filmes que são permitidos para menores de 17 anos.
```
SELECT * FROM sakila.film
WHERE rating = 'G' or rating = 'PG-13' or rating = 'PG';
```