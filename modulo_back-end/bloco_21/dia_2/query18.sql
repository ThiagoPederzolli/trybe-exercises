Exibir todas as colunas da tabela hotel.customer, mas somente onde existe relacionamento de CustomerId com a tabela hotel.reservations
```
SELECT * FROM hotel.customer AS C
WHERE EXISTS(
SELECT * FROM hotel.reservations WHERE C.CustomerId = reservations.CustomerId);
```