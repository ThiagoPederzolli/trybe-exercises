Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer .
```
SELECT c.first_name, c.email, c.address_id, a.address, a.district
FROM sakila.customer AS c
INNER JOIN sakila.address AS a ON a.district = 'California' AND first_name LIKE '%rene%';

SELECT C.first_name, C.email, C.address_id, A.address, A.district
FROM sakila.customer AS C
INNER JOIN sakila.address AS A ON C.address_id = A.address_id
WHERE
    A.district = 'California'
    AND C.first_name LIKE '%rene%';
```