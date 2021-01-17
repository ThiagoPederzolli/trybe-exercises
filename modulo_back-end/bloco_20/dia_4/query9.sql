Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
```
UPDATE sakila.film
SET rental_rate = (
    CASE
        WHEN length BETWEEN 1 AND 100 THEN 10
        WHEN length > 100 THEN 20
    END
);
```