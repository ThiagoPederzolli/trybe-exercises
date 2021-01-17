Querer trazer city_id, nome da cidade e o endereço em sakila.address:
```
SELECT a.address, a.city_id, c.city
FROM sakila.address AS a
JOIN sakila.city AS c
ON c.city_id = a.city_id;
```