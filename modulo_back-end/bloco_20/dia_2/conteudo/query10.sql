1. Na tabela sakila.film, monte uma query que exiba o título e o ano de lançamento dos filmes em uma coluna e dê a ela o nome de Lançamento do Filme:
```
SELECT CONCAT(title, ' ', description) AS 'Lançamento do filme' FROM sakila.film;
```