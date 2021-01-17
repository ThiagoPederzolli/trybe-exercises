Quantos filmes foram alugados entre 01/07/2005 e 22/08/2005 ?
```
SELECT COUNT(*) FROM sakila.rental
WHERE return_date BETWEEN '2005-07-01' AND '2005-08-22';
```