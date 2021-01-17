// Exercício 3: Retorne o total de super-heróis menores que 1.80m.
```
db.superheroes.find({"aspects.height": {$lt: 180}}).count()
```