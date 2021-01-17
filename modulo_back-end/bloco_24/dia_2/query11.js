// - Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;
```
db.movies.updateOne({title: "Batman", "cast.character": "Batman"}, {$set: {"cast.$.actor": ["Christian Bale"]}})
```