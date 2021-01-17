3. Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome de Endereço:
```
SELECT CONCAT(address, ' ', district) AS 'Endereço' FROM sakila.address;
```