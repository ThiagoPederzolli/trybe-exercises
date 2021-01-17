Escreva uma query para exibir todas as informações das peças que são providas pela empresa HAL . Ordene o resultado pelos preços dos peças de forma decrescente.
```
SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;
```