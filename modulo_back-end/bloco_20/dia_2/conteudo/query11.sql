2. Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome de classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis:
```
SELECT CONCAT(title, ' ', rating) AS 'Classificação' FROM sakila.film;
```