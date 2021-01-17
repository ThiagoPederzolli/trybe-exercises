// Exercício 15 : Produza uma query que renomeie os campos de name para hero_name , e de true_name para full_name ; adicione o campo power com valor 100, em todos os documentos.
```
db.xmen.updateMany({},{$set: {power: 100}},{$rename: {name: "hero_name", true_name: "full_name"}, {$currentDate: {lastUpdate: { $type: "timestamp" }}})
```