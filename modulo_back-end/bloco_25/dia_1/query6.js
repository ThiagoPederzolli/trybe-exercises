// Selecione todos os cliente do estado da "Florida" e suas respectivas transações recebidas.
```
db.clients.aggregate([{$lookup: {from: "transactions", localField: "name", foreignField:"to", as: "finished_transactions"}}, {$match: {State: "Florida"}}]).pretty()
```