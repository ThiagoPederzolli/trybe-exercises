	- Quantos sobrenomes únicos temos no banco de dados?
```
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
```