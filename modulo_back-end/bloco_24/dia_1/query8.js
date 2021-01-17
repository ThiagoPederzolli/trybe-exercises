// Exercício 8 : Utilize o operador $min para alterar o budget para 5 do filme Home Alone .
```
db.movies.updateOne({title: "Home Alone"},{$min: { bugdget: 5}})
```