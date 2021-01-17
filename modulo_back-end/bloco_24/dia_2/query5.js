// Exercício 5: Remova o último elemento do array category do filme Batman .
```
db.movies.updateOne({title: "Batman"}, {$pop: {category: 1}})
```