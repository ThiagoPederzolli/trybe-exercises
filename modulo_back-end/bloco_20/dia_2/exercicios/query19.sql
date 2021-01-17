Escreve uma query para exibir todas as informações das cinco peças com os maiores preços.
```
SELECT Piece, Price FROM Provides
ORDER BY Price DESC LIMIT 5;
```