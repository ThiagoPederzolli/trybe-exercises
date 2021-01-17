Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não compraram um carro.
```
SELECT name
FROM hotel.customers c
WHERE NOT EXISTS(
    SELECT *
    FROM carsales
    WHERE customerid = c.customerid
);
```