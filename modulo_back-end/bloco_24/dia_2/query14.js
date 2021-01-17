// Exercício 14: Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton" , "Val Kilmer" e "George Clooney" , e deixe o array em ordem alfabética.
```
db.movies.updateOne({title: "Batman", "cast.character": "Batman"}, {$push: {"cast.$.actor": {$each: ["Michael Keaton", "Val Kilmer", "George Clooney"], $sort: 1}}})
```