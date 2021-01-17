Select the average price of each manufacturer's products, showing the manufacturer's name.
```
SELECT AVG(p.price), m.name
FROM praticando.Products AS p
INNER JOIN praticando.Manufacturers AS m
ON p.Manufacturer = m.code
GROUP BY m.name;
```