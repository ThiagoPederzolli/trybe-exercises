// Utilizando o operador $regex , retorne todos os filmes em que a descrição termine com a palavra "humanity." .
```
db.movies.find({description: {$regex: /humanity/}})
```