// Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .
```
db.movies.find({category: {$all: ["action", "adventure"]}}).pretty()
```