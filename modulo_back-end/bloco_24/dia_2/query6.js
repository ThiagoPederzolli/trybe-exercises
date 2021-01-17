// Exercício 6: Adicione o elemento "action" ao array category do filme Batman , garantindo que esse valor não se duplique.
```
db.movies.updateOne({title: "Batman"}, {$addToSet: {category: "action"}})
```