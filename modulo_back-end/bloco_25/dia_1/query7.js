// Selecione todos os bancos;
```
db.transactions.aggregate([
... {$group: { _id: "$bank", count: {$sum: 1}}}])
```