// Exercício 10: Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
```
db.movies.updateOne({title: "Batman"}, {$push: {cast: {$each: [
{
  "character": "Batman"
},
{
  "character": "Alfred"
},
{
  "character": "Coringa"
}
]}}})
```