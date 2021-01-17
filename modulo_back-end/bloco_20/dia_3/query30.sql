Monte uma query que encontre o id e a data de aluguel do filme que foi alugado no dia 18/08/2005 às 00:14:03.
```
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date like '2005-08-18 00:14:03';
```