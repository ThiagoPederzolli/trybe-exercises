// Exercício 5 : Aumente em 5 o budget do filme Home Alone .
```
db.movies.updateOne({title: "Home Alone"},{$inc: { budget: 5}})
```