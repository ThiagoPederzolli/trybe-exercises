Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
```
SELECT IF(5 MOD 2, 'Par', 'Ímpar') AS `Par ou Ímpar`;
```