Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
```
SELECT cus.name, car.name
FROM cars car
INNER JOIN customers cus
WHERE EXISTS(
    SELECT *
    FROM hotel.carsales
    WHERE CustomerID = cus.CustomerId
    AND carID = car.ID
);
```