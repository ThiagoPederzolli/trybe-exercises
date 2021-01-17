
Select the names of manufacturer whose products have an average price larger than or equal to $150.
```
SELECT AVG(p.price), m.name
FROM praticando.Manufacturers AS m
INNER JOIN praticando.Products AS p
ON p.Manufacturer = m.code
GROUP BY m.name
HAVING AVG(p.price) >= 150;
```