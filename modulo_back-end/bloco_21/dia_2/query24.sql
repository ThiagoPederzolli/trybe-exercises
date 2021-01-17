Select all the data from the products, including all the data for each product's manufacturer.
```
SELECT p.*, m.name
FROM praticando.Products AS p
INNER JOIN praticando.Manufacturers AS m
ON p.Manufacturer = m.code;
```