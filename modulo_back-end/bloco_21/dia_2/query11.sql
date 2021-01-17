Quero encontrar a rua e o distrito de todos os endereços que estão em distritos diferentes:
```
SELECT a.address, a.district, b.address, b.district
FROM sakila.address AS a, sakila.address AS b
WHERE a.district <> b.district;
```