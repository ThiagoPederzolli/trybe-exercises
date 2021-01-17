// Utilizando o operador $text , busque por filmes que contenham os termos "monstrous" e "criminal" .
```
db.movies.find({$text: {$search: "monstruos criminal"}})
```