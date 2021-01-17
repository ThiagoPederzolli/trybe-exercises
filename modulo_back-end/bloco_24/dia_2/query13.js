// - Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa .
```
db.movies.updateOne({title: "Batman", "cast.character": "Coringa"}, {$set: {"cast.$.actor": ["Heath Ledger"]}})
```