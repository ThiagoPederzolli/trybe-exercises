Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
```
DELETE FROM sakila.film_text
WHERE DESCRIPTION LIKE '%saga%';
```