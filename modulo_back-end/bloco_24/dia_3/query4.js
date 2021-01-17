// Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .
```
db.movies.updateOne({title: "Godzilla"}, {$push: {ratings: {$each: [78, 52, 95, 102]}}})
```