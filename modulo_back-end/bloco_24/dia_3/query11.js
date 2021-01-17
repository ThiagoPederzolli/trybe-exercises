// Retorne somente o título de todos os filmes com quatro elementos no array ratings .
```
db.movies.find({ratings: {$size: 4}}, {_id: 0, title: 1})
```