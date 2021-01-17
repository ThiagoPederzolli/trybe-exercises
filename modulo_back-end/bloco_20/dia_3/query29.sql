Usando a tabela rental , extraia data, ano, mês, dia, hora, minuto e segundo dos registros com rental_id = 10330.
```
SELECT DATE(return_date), YEAR(return_date), MONTH(rental_date), DAY(rental_date), HOUR(rental_date), MINUTE(rental_date), SECOND(rental_date) FROM sakila.rental
WHERE rental_id = 10330;
```