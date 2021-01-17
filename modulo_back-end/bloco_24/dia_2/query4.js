// Exercício 4: Remova o primeiro elemento do array category do filme Batman .
```
db.movies.updateOne({title: "Batman"}, {$pop: {category: -1}})
```