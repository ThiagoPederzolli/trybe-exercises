Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address .
```
SELECT first_name, last_name, address
FROM sakila.staff AS s
JOIN sakila.address AS a
ON s.address_id = a.address_id;
```