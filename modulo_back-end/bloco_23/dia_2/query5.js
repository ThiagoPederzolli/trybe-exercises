// Exercício 5: Selecione um super-herói com 2.00m ou mais de altura.
```
> db.superheroes.findOne({"aspects.height": {$gte: 200}})
```