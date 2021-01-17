// Selecione quatro clientes com as suas respectivas transações recebidas;
```
db.clients.aggregate([{$lookup: {from: "transactions", localField: "name", foreignField:"to", as: "finished_transactions"}}, {$limit: 4}]).pretty()
```