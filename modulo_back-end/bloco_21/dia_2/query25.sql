Select the product name, price, and manufacturer name of all the products.
```
SELECT p.name, p.price, m.name
FROM praticando.Products AS p
INNER JOIN praticando.Manufacturers AS m
ON p.Manufacturer = m.code;
```