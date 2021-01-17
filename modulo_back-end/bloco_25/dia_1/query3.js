// 3. Selecione três transações com o valor acima de 1000.
```
db.transactions.aggregate([{$match: {value: {$gt: 1000}}}, {$limit: 5}])
```