Encontre todos os detalhes dos dois filmes cujas descrições contêm a palavra " girl " e o título finaliza com a palavra " lord ".
```
SELECT *  FROM sakila.film
WHERE description LIKE '%girl%' AND title LIKE '%lord';
```