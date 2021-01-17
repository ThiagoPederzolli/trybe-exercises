Precisamos de um relatório dos nomes, em ordem alfabética, dos clientes que não estão mais ativos no nosso sistema e pertencem à loja com o id 2. Porém, não inclua o cliente KENNETH no resultado.
```
SELECT first_name FROM sakila.customer
WHERE active IS FALSE AND store_id = 2 AND first_name <> 'KENNETH'
ORDER BY first_name;
```