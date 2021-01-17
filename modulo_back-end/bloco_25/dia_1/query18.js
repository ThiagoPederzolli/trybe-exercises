// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
```
db.vendas.aggregate([{$match: {status: {$in: ["ENTREGUE", "EM SEPARACAO"]}}}, {$group: {_id: "$clienteId", total: {$sum: "$valorTotal"}}}, {$sort: {total: -1}}, {$limit: 5}]).pretty()
```