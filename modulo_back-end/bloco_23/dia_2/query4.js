// Exercício 4: Retorne o total de super-heróis com até 1.80m.
```
> db.superheroes.find({"aspects.height": {$gt: 180}}).count()
```