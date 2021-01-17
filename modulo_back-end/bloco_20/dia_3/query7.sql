no banco sakila na tabela rental, verificar se algum filme ainda não foi devolvido.
```
SELECT * FROM sakila.rental
WHERE return_date IS NULL;
```