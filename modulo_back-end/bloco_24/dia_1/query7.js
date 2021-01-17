// Exercício 7 : Renomeie o campo budget para estimatedBudget do filme Batman .
```
db.movies.updateOne({title: "Batman"}, {$rename: {budget: "estimatedBudget"}})
```