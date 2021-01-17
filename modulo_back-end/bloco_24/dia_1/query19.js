// Exercício 19 : Em apenas uma query adicione o campo area com o seguinte array como valor: [ "Students Room" ] a todos os mutantes que são Senior Staff que tenham poder acima de 100 e para todos os Junior Staff com poder acima de 200.
```
db.xmen.updateMany({$or: [{$and: [{occupation: "Senior Staff"},{power: {$gt: 100}}]}, {$and: [{occupation: "Junior Staff"},{power: {$gt: 200}}]}]}, {$set: {areas: ["Students Rooms"]}, $currentDate: {lastUpdate: {$type: "timestamp"}}})
```