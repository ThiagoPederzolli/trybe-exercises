// Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
```
db.movies.updateOne({title: "Batman"}, {$push: {ratings: {$each: [85, 100, 102, 105] }}})
```