Quais clientes possuem pagamentos cadastrados em nosso banco de dados?
```
SELECT customer_id, first_name FROM sakila.customer AS c
WHERE EXISTS(
SELECT * FROM sakila.payment WHERE c.customer_id = customer_id);
```