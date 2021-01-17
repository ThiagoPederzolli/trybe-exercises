// Exercício 7: Adicione a categoria "90's" aos filmes Batman e Home Alone .
```
db.movies.updateMany({ title: {$in: ["Batman", "Home Alone"]}}, {$push: {category: "90's"}})
```