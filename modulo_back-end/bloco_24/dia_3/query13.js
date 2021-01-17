// Retorne os filmes da categoria "sci-fi" ou que possua o ratings maior do que 199 , exibindo apenas os campos title , ratings e category .
```
db.movies.find({$or: [{category: {$all: ["sci-fi"]}}, {ratings: {$elemMatch: {gt: 199}}}]}, {_id: 0, title: 1, ratings: 1, category: 1})
```