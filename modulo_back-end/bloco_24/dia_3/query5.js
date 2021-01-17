// Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .
```
db.movies.updateOne({title: "Home Alone"}, {$push: {ratings: {$each: [200, 99, 65] }}})
```