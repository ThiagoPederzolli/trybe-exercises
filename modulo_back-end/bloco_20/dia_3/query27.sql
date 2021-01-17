Quantos aluguéis temos com a data de retorno 2005-08-29 ? Há múltiplas maneiras possíveis de encontrar a resposta.
```
SELECT COUNT(*) FROM sakila.rental
WHERE DATE(return_date) = '2005-08-29';
```