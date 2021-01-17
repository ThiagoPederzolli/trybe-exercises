// Exercício 6: Retorne o total de super-heróis com 2.00m ou mais.
```
db.superheroes.find({"aspects.height": {$gte: 200}}).count()
```