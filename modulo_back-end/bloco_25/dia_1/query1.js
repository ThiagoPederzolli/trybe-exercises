// 1. Selecione todas as transações feitas pelo cliente chamado "Dave America";
```
db.transactions.aggregate([ {$match: {from: "Dave America"}} ])
```