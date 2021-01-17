// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.
```
db.clientes.aggregate([{$match: {"endereco.uf": "SC"}}, {$group: { _id: "SC", total: {$sum: 1}}}])
```