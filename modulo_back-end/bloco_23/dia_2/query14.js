// Exercício 14: Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics .
```
db.superheroes.find({$and: [{$or: [{"aspects.height": 180}, {"aspects.height":200}]},{publisher: "Marvel Comics"}]})
```