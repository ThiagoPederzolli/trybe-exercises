Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor .
```
INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name
    FROM sakila.customer
    ORDER BY customer_id
    LIMIT 5;
```