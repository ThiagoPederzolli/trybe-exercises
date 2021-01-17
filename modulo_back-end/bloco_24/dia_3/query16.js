// Adicione o campo description no filme Godzilla com o seguinte valor: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity." .
```
db.movies.updateOne({title: "Godzilla"}, {$set: {description: "The world is beset by the appearance of monstrous creatures, but one of them may be the only one who can save humanity."}})
```