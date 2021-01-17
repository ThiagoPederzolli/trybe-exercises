// Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
```
db.movies.find({ratings: {$elemMatch: {$gte: 100, $lte: 105}}}, {"_id": 0, title: 1, ratings: 1})
```