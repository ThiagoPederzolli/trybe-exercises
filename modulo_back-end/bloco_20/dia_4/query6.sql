Atualize o primeiro nome de todas as pessoas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
```
UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';
```