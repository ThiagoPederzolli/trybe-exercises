// Exercício 3 : Altere budget para 15 e imdbRating para 5.5 no filme Home Alone .
```
db.movies.updateOne({title: "Home Alone"}, {$set: {budget: 15, imdbRating: 5.5}})
```