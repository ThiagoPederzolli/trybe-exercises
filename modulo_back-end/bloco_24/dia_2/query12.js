// - Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred ;
```
db.movies.updateOne({title: "Batman", "cast.character": "Alfred"}, {$set: {"cast.$.actor": ["Michael Caine"]}})
```