// Utilizando o operador $text , busque por filmes que contenham a frase "when he is accidentally" .
```
db.movies.find({$text: {$search: "\"when he is accidentally\""}})
```