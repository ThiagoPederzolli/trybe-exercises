Select the average price of each manufacturer's products, showing only the manufacturer's code.
```
SELECT AVG(p.price), Manufacturer
FROM praticando.Products
GROUP BY Manufacturer;
```