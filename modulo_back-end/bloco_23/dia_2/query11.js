// Exercício 11: Retorne o total de super-heróis que não tenham cabelos pretos ou não sejam carecas.
```
db.superheroes.find({"aspects.hairColor": {$nin:['Black', 'No Hair']}}).count()
```