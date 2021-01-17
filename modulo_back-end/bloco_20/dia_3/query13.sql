Mostre todos os detalhes dos clientes que não estão ativos na loja 1.
```
SELECT *  FROM sakila.customer
WHERE active IS FALSE AND store_id = 1;
```