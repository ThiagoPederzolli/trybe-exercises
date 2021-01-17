// Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
```
db.movies.find({$and: [{imdbRating: {$gt: 7}}, {category: {$all: ["action"]}}]}).pretty()

db.movies.find(
  {
    category: {
      $all: ["action"]
    },
    imdbRating: { $gt: 7 }
  }
).pretty();
```