- Qual query precisaria montar para trazer os 10 primeiros resutlados, a partir de JHONNY na tabela actor?
```
SELECT * FROM sakila.actor
LIMIT 10 OFFSET 4;
```