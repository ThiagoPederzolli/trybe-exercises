// Selecione os bancos que têm o valor total de transações maior que 1000.
```
db.transactions.aggregate([{$group: {_id: "$bank", totaltransaction: {$sum: "$value"}, count: {$sum: 1}}}, {$match:{ "totaltransaction":{$gte: 1000}}}])
```