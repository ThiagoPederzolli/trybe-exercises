Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados únicos.
```
SELECT first_name FROM customer WHERE first_name LIKE '%tracy%'
UNION
SELECT first_name FROM actor WHERE first_name LIKE '%je%';
```