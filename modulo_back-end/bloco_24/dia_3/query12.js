// Busque os filmes em que o módulo 5 do campo budget seja 0 e que o array category tenha tamanho 2 .
```
db.movies.find({budget: {$mod: [5,0]}, category: {$size: 2}})
```